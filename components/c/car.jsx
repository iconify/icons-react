import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyqc_jbvf.css';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c2nrvxxfg.css';
import '../../css/w/wnc-yfd4w.css';
import '../../css/p/pp4ucs99c.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGj7xSjeIh" class="fyqc_jbvf"/></defs><g transform="translate(1 4)" class="bi12bsetm"><circle class="c2nrvxxfg"/><circle class="wnc-yfd4w"/><use href="#SVGj7xSjeIh"/><use href="#SVGj7xSjeIh"/><path class="pp4ucs99c"/></g>`,
		"fallback": "si-glyph:car",
	});
}

export default Component;
