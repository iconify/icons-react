import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u9vz9ubvn.css';
import '../../css/g/g5pwokrqp.css';
import '../../css/k/ka8qthboq.css';
import '../../css/k/kh418hbwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u9vz9ubvn"/><path class="g5pwokrqp"/><path class="ka8qthboq"/><path class="kh418hbwm"/></g>`,
		"fallback": "andrsrxn:aquarium",
	});
}

export default Component;
