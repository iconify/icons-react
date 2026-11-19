import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dm2s42b5u.css';
import '../../css/f/f4v6p8b5y.css';
import '../../css/m/mxr3vm4-r.css';
import '../../css/g/g4u5lnbvc.css';
import '../../css/j/j-9rpxbyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dm2s42b5u"/><path class="f4v6p8b5y"/><path class="mxr3vm4-r"/><circle class="g4u5lnbvc"/><path class="j-9rpxbyg"/></g>`,
		"fallback": "andrsrxn:camera-shake",
	});
}

export default Component;
