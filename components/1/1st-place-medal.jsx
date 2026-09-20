import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhl4csb8p.css';
import '../../css/j/jhn3jobnr.css';
import '../../css/w/w0nvg6bfx.css';
import '../../css/q/q0u3pfb-g.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/r/rk100jb7k.css';
import '../../css/p/p_laet0jp.css';
import '../../css/h/hq1w7nyrj.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhl4csb8p"/><path class="jhn3jobnr"/><path class="w0nvg6bfx"/><circle class="q0u3pfb-g"/><g class="x8poo_bjf"><circle class="rk100jb7k"/><circle class="p_laet0jp"/><path class="hq1w7nyrj"/></g>`,
		"fallback": "openmoji:1st-place-medal",
	});
}

export default Component;
