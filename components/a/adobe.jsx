import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/illrh5bzf.css';
import '../../css/r/rr-kwt_tv.css';
import '../../css/i/it-ggbbnk.css';

const viewBox = {"width":91,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGCkrFieff)" class="illrh5bzf"><path class="rr-kwt_tv"/></g><defs><clipPath id="SVGCkrFieff"><path class="it-ggbbnk"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:adobe",
	});
}

export default Component;
