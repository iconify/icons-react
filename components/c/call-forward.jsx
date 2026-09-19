import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lbvvl37az.css';
import '../../css/b/bzo7e1msp.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="lbvvl37az"/><path class="bzo7e1msp"/></g>`,
		"fallback": "si-glyph:call-forward",
	});
}

export default Component;
