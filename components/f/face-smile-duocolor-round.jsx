import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eo19743sn.css';
import '../../css/q/q_a5zcbnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eo19743sn"/><path class="q_a5zcbnk"/></g>`,
		"fallback": "coolicons:face-smile-duocolor-round",
	});
}

export default Component;
