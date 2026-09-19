import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y7mlxub_d.css';
import '../../css/w/wnpbb5hga.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y7mlxub_d"/><path clip-rule="evenodd" class="wnpbb5hga"/></g>`,
		"fallback": "heroicons-solid:device-phone-mobile",
	});
}

export default Component;
