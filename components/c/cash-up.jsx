import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/spqcbsbpc.css';
import '../../css/i/i1df-l0xu.css';
import '../../css/q/ql5dfdccc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="spqcbsbpc"/><path class="i1df-l0xu"/><path class="ql5dfdccc"/></g>`,
		"fallback": "tabler:cash-up",
	});
}

export default Component;
