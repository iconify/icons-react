import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q53mxcbwh.css';
import '../../css/q/qg747fhvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q53mxcbwh"/><path class="qg747fhvx"/></g>`,
		"fallback": "lucide-lab:bell-concierge-off",
	});
}

export default Component;
