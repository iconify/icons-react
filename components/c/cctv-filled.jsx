import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f69032b0y.css';
import '../../css/c/cvjvrzlib.css';
import '../../css/h/hafas-bxx.css';
import '../../css/i/iq8fttbma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f69032b0y"/><rect transform="rotate(15 3.47 2.77)" class="cvjvrzlib"/><path class="hafas-bxx"/><path class="iq8fttbma"/></g>`,
		"fallback": "andrsrxn:cctv-filled",
	});
}

export default Component;
