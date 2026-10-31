import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m7wsiiesq.css';
import '../../css/u/u677j9bfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m7wsiiesq"/><path class="u677j9bfh"/></g>`,
		"fallback": "coolicons:camera-off-duocolor-round",
	});
}

export default Component;
