import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vqt_2mb4y.css';
import '../../css/x/xe_boybds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vqt_2mb4y"/><path class="xe_boybds"/></g>`,
		"fallback": "coolicons:ambulance-duocolor-round",
	});
}

export default Component;
