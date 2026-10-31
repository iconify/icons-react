import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sqfiisb1o.css';
import '../../css/l/lzq8mubvg.css';
import '../../css/g/gc9ew1bqh.css';
import '../../css/l/l2fpngjgy.css';
import '../../css/w/wxx3ysb1g.css';
import '../../css/w/wnveq1bjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="sqfiisb1o"/><path class="lzq8mubvg"/><path class="gc9ew1bqh wm-shine"/><path class="l2fpngjgy wm-k"/><path class="wm-a wxx3ysb1g"/><path class="wm-deco wnveq1bjc"/></g>`,
		"fallback": "withicons-kawaii:folder-lock",
	});
}

export default Component;
