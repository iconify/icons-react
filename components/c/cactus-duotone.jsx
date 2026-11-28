import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcn3b7e3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary xcn3b7e3e"/>`,
		"fallback": "iconaut:cactus-duotone",
	});
}

export default Component;
