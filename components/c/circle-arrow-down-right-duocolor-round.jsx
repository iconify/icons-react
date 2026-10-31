import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xi1_1trls.css';
import '../../css/q/q_a5zcbnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xi1_1trls"/><path class="q_a5zcbnk"/></g>`,
		"fallback": "coolicons:circle-arrow-down-right-duocolor-round",
	});
}

export default Component;
