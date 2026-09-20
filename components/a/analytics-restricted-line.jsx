import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qes_gtm2p.css';
import '../../css/q/q7xl1wbww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qes_gtm2p"/><path class="q7xl1wbww"/></g>`,
		"fallback": "majesticons:analytics-restricted-line",
	});
}

export default Component;
