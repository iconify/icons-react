import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hovzczbga.css';
import '../../css/q/qyrppac0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hovzczbga"/><path class="qyrppac0c"/></g>`,
		"fallback": "coolicons:images-duocolor-round",
	});
}

export default Component;
