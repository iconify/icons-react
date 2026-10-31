import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pmu18cbyv.css';
import '../../css/k/kiy5cv2jm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="pmu18cbyv wm-k"/><path class="kiy5cv2jm wm-s"/></g>`,
		"fallback": "withicons:gavel-gloss",
	});
}

export default Component;
