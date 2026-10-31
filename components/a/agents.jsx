import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tr14r8jqe.css';
import '../../css/f/fomq6lb2z.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/m/mb4sy-blh.css';
import '../../css/h/hpm6o5bfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="tr14r8jqe"/><path class="fomq6lb2z"/><g class="mc2zb0bvp"><circle class="mb4sy-blh"/><path class="hpm6o5bfn"/></g></g>`,
		"fallback": "struq:agents",
	});
}

export default Component;
