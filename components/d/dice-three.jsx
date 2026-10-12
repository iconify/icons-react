import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ftnjez00z.css';
import '../../css/z/zp8fjxjrj.css';
import '../../css/t/tn-ch075i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 21.4 21.4)" class="ftnjez00z"/><rect transform="matrix(0 -1 -1 0 21.4 21.4)" class="zp8fjxjrj"/><path class="tn-ch075i"/></g>`,
		"fallback": "andrsrxn:dice-three",
	});
}

export default Component;
