import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwl57ubde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary xwl57ubde"/>`,
		"fallback": "iconaut:fit-width-duotone",
	});
}

export default Component;
