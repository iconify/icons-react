import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlohki39a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlohki39a primary"/>`,
		"fallback": "iconaut:align-left-duotone",
	});
}

export default Component;
