import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hir2rd3zm.css';
import '../../css/k/kp9s7d_6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hir2rd3zm"/><path class="kp9s7d_6g"/></g>`,
		"fallback": "coolicons:flip-vertical-duocolor-round",
	});
}

export default Component;
