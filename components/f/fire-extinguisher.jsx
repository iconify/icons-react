import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruevm4bfr.css';
import '../../css/z/zsprg9jlr.css';
import '../../css/b/bv2_dltfd.css';
import '../../css/e/e_aghdcvj.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/u/ue-hl85dx.css';
import '../../css/r/rxwe5oy7h.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruevm4bfr"/><path class="zsprg9jlr"/><path class="bv2_dltfd"/><path class="e_aghdcvj"/><g class="jn8qy4bru"><path class="ue-hl85dx"/><path class="rxwe5oy7h"/></g>`,
		"fallback": "openmoji:fire-extinguisher",
	});
}

export default Component;
