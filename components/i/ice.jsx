import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu-srac4k.css';
import '../../css/u/uj7xro1oo.css';
import '../../css/z/z3zt-6avv.css';
import '../../css/d/dx53d08zj.css';
import '../../css/j/j-venkpnw.css';
import '../../css/n/n-hy5msib.css';
import '../../css/n/nhxestbjj.css';
import '../../css/j/jpm9uxbig.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu-srac4k"/><path class="uj7xro1oo"/><path class="z3zt-6avv"/><path class="dx53d08zj"/><path class="j-venkpnw"/><g class="n-hy5msib"><path class="nhxestbjj"/><path class="jpm9uxbig"/></g>`,
		"fallback": "openmoji:ice",
	});
}

export default Component;
