import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/w5m7spedc.css';
import '../../css/v/vxi9_t2ne.css';
import '../../css/i/ikiy7bbxo.css';
import '../../css/m/mw3tpyb4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="w5m7spedc"/><path class="vxi9_t2ne"/><path class="ikiy7bbxo"/><path class="mw3tpyb4d"/></g>`,
		"fallback": "withicons-bauhaus:avatar-panda",
	});
}

export default Component;
