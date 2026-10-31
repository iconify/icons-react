import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/t/t20xnac_q.css';
import '../../css/c/c6quv0_-z.css';
import '../../css/c/c5oh-qbkc.css';
import '../../css/f/fmjg88g6v.css';
import '../../css/t/tus9njbnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="t20xnac_q"/><path class="c6quv0_-z"/><path class="c5oh-qbkc"/><path class="fmjg88g6v"/><path class="tus9njbnr"/></g>`,
		"fallback": "withicons-retro:file-lock",
	});
}

export default Component;
