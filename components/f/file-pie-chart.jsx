import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g6wanyb_h.css';
import '../../css/q/qdca2rboq.css';
import '../../css/u/u2n0v5-2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g6wanyb_h"/><path class="qdca2rboq"/><path class="u2n0v5-2z"/></g>`,
		"fallback": "lucide:file-pie-chart",
	});
}

export default Component;
