import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f92hmc0qt.css';
import '../../css/u/ufa7isi8s.css';
import '../../css/t/tedk3lbzc.css';
import '../../css/n/nlvuxlacw.css';
import '../../css/u/u9e0qnb4x.css';
import '../../css/d/dl_kyxbxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="f92hmc0qt wm-shadow"/><path class="ufa7isi8s"/><path class="tedk3lbzc"/><path class="nlvuxlacw"/><path class="u9e0qnb4x"/><path class="dl_kyxbxt"/></g>`,
		"fallback": "withicons-retro:heart-pair",
	});
}

export default Component;
