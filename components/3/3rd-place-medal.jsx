import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya8u5iv6o.css';
import '../../css/a/a6p41zijm.css';
import '../../css/j/jhn3jobnr.css';
import '../../css/w/w0nvg6bfx.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/t/t9mvgybsl.css';
import '../../css/t/tpfdcfgic.css';
import '../../css/m/mxze8ab6q.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya8u5iv6o"/><circle class="a6p41zijm"/><path class="jhn3jobnr"/><path class="w0nvg6bfx"/><g class="x8poo_bjf"><circle class="t9mvgybsl"/><circle class="tpfdcfgic"/><path class="mxze8ab6q"/></g>`,
		"fallback": "openmoji:3rd-place-medal",
	});
}

export default Component;
