import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/o/oe9izwbcv.css';
import '../../css/t/tkz1sbcsq.css';
import '../../css/k/kzx908bdf.css';
import '../../css/z/zfikey8jo.css';
import '../../css/x/x3qh7zb8m.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVG5yhmZdYp"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="oe9izwbcv"/><path class="tkz1sbcsq"/><path clip-rule="evenodd" class="kzx908bdf"/><path clip-rule="evenodd" class="zfikey8jo"/><path clip-rule="evenodd" class="x3qh7zb8m"/></g></mask></defs><circle mask="url(#SVG5yhmZdYp)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:countdown-circle-filled",
	});
}

export default Component;
