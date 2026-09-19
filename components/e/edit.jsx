import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_js-l3oe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_js-l3oe"/>`,
		"fallback": "griddy-icons:edit",
	});
}

export default Component;
