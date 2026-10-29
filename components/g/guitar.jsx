import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1lp20buu.css';
import '../../css/h/higpfcc7h.css';
import '../../css/r/r-pq7vbvm.css';
import '../../css/u/u4sydbb7s.css';
import '../../css/n/nd4c3sb3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-k z1lp20buu"/><path class="higpfcc7h wm-a"/><path class="r-pq7vbvm wm-k"/><path class="u4sydbb7s"/><path class="nd4c3sb3s"/></g>`,
		"fallback": "withicons-bauhaus:guitar",
	});
}

export default Component;
