import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r66xwe8tl.css';
import '../../css/m/mxys-bb-k.css';
import '../../css/k/kq3-rqbib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r66xwe8tl"/><path class="mxys-bb-k"/><path class="kq3-rqbib"/></g>`,
		"fallback": "andrsrxn:flag-off",
	});
}

export default Component;
