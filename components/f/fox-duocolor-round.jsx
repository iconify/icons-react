import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hwn02cc6z.css';
import '../../css/w/w6w9_rb0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hwn02cc6z"/><path class="w6w9_rb0g"/></g>`,
		"fallback": "coolicons:fox-duocolor-round",
	});
}

export default Component;
