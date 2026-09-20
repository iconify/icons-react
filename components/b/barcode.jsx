import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkq7-hbwz.css';
import '../../css/b/bc5-xubfs.css';
import '../../css/j/jpvb309lh.css';
import '../../css/t/t6fswnnuc.css';
import '../../css/k/kfiyvrbmr.css';
import '../../css/z/zuflihnqh.css';
import '../../css/u/ueou_ejbd.css';
import '../../css/v/vey4gbhgb.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkq7-hbwz"/><g class="bc5-xubfs"><path class="jpvb309lh"/><path class="t6fswnnuc"/><path class="kfiyvrbmr"/><path class="zuflihnqh"/><path class="ueou_ejbd"/><path class="vey4gbhgb"/></g>`,
		"fallback": "openmoji:barcode",
	});
}

export default Component;
