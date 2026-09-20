import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fheb08bhh.css';
import '../../css/u/ucj06gbjr.css';
import '../../css/v/vc0ol_bef.css';
import '../../css/i/ikb0e-8ys.css';
import '../../css/b/bo_ljhqqa.css';
import '../../css/u/u4rjns70c.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/j/jdz9gsbal.css';
import '../../css/e/emew141bv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fheb08bhh"/><path class="ucj06gbjr"/><path class="vc0ol_bef"/><path class="ikb0e-8ys"/><path class="bo_ljhqqa"/><path class="u4rjns70c"/><g class="jn8qy4bru"><path class="jdz9gsbal"/><path class="emew141bv"/></g>`,
		"fallback": "openmoji:clipboard",
	});
}

export default Component;
