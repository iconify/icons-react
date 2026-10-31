import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vu_mukbdk.css';
import '../../css/k/kp3dedlav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vu_mukbdk"/><path class="kp3dedlav"/></g>`,
		"fallback": "coolicons:chat-check-duocolor-round",
	});
}

export default Component;
