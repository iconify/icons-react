import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/o/ojo7aabmx.css';
import '../../css/y/yzvn82b5x.css';
import '../../css/a/a7d4ic-4c.css';
import '../../css/t/t-ksozgnh.css';
import '../../css/r/r2usqhbgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="ojo7aabmx"/><path class="yzvn82b5x"/><path class="a7d4ic-4c"/><path class="t-ksozgnh"/><path class="r2usqhbgf"/></g>`,
		"fallback": "withicons-retro:file-diff",
	});
}

export default Component;
