import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8ffwrbpp.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vwqu088iv.css';
import '../../css/i/ige5ecbiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8ffwrbpp secondary"/><g class="dt0cm9dhy primary"><path class="vwqu088iv"/><path class="ige5ecbiu"/></g>`,
		"fallback": "iconaut:cylinder-duo",
	});
}

export default Component;
