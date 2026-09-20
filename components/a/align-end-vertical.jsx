import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rknlpibqr.css';
import '../../css/q/q4e1ubcon.css';
import '../../css/l/lcjryzm1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="rknlpibqr"/><rect class="q4e1ubcon"/><path class="lcjryzm1i"/></g>`,
		"fallback": "lucide:align-end-vertical",
	});
}

export default Component;
