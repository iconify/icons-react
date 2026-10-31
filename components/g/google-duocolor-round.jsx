import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e3g3npbcq.css';
import '../../css/d/d5o1d7phh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e3g3npbcq"/><path class="d5o1d7phh"/></g>`,
		"fallback": "coolicons:google-duocolor-round",
	});
}

export default Component;
