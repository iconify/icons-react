import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z6rxl7-rj.css';
import '../../css/e/eanr4rsxn.css';
import '../../css/n/nnvi4slph.css';
import '../../css/z/zseb28bor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="z6rxl7-rj"/><path class="eanr4rsxn"/><path class="nnvi4slph"/><circle transform="rotate(90 12 12.91)" class="zseb28bor"/></g>`,
		"fallback": "andrsrxn:camera-flash",
	});
}

export default Component;
