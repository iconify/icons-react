import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qgf35sqoj.css';
import '../../css/k/khxyncrbi.css';
import '../../css/k/ke9d-2l_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qgf35sqoj"/><path class="khxyncrbi"/><path class="ke9d-2l_i"/></g>`,
		"fallback": "streamline-cyber-color:gorilla",
	});
}

export default Component;
