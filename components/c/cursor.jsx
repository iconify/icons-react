import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/ngntxzbbr.css';
import '../../css/i/ikiu082zf.css';
import '../../css/f/f_en153mb.css';
import '../../css/n/nm0j5fbmv.css';
import '../../css/d/dhp9nq2cb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ngntxzbbr wm-shadow"/><path class="ikiu082zf"/><path class="f_en153mb"/><path class="nm0j5fbmv"/><path class="dhp9nq2cb"/></g>`,
		"fallback": "withicons-retro:cursor",
	});
}

export default Component;
