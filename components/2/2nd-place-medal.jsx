import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bantg8bja.css';
import '../../css/j/jhn3jobnr.css';
import '../../css/w/w0nvg6bfx.css';
import '../../css/a/aq8wdb2pi.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/r/rk100jb7k.css';
import '../../css/p/p_laet0jp.css';
import '../../css/n/ntc_yhbio.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bantg8bja"/><path class="jhn3jobnr"/><path class="w0nvg6bfx"/><circle class="aq8wdb2pi"/><g class="x8poo_bjf"><circle class="rk100jb7k"/><circle class="p_laet0jp"/><path class="ntc_yhbio"/></g>`,
		"fallback": "openmoji:2nd-place-medal",
	});
}

export default Component;
