import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx6gx47-s.css';
import '../../css/b/bmz6jbb6w.css';
import '../../css/f/fmpoowbwx.css';
import '../../css/o/obn2ynb1t.css';
import '../../css/u/u9rsq_bke.css';
import '../../css/e/e2o918bnz.css';

const viewBox = {"width":100,"height":92.027};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nx6gx47-s"/><path class="bmz6jbb6w"/><path class="fmpoowbwx"/><path class="obn2ynb1t"/><defs><path id="SVGokimGeVl" class="u9rsq_bke"/></defs><clipPath id="SVGroEgGcnI"><use href="#SVGokimGeVl"/></clipPath><path clip-path="url(#SVGroEgGcnI)" class="e2o918bnz"/>`,
		"fallback": "flat-ui:basket",
	});
}

export default Component;
