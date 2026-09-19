import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mwp_oydnr.css';
import '../../css/x/x7fo1-u6w.css';
import '../../css/e/era4mkbci.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mwp_oydnr"/><path clip-rule="evenodd" class="x7fo1-u6w"/><path class="era4mkbci"/></g>`,
		"fallback": "fluent-emoji-flat:heart-hands-light",
	});
}

export default Component;
