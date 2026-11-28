import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q0yg_obxi.css';
import '../../css/k/kcjtj-dfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q0yg_obxi secondary"/><path class="kcjtj-dfo primary"/></g>`,
		"fallback": "iconaut:folder-input-duotone",
	});
}

export default Component;
