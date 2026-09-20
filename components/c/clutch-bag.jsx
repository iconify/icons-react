import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hglesubmm.css';
import '../../css/d/doj9dq_jg.css';
import '../../css/p/p0-cslbgk.css';
import '../../css/d/det5ad1ub.css';
import '../../css/i/i497iigme.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hglesubmm"/><g class="doj9dq_jg"><path class="p0-cslbgk"/><path class="det5ad1ub"/><path class="i497iigme"/></g>`,
		"fallback": "openmoji:clutch-bag",
	});
}

export default Component;
