import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u7r7g1bwi.css';
import '../../css/k/kp3dedlav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u7r7g1bwi"/><path class="kp3dedlav"/></g>`,
		"fallback": "coolicons:chat-plus-duocolor-round",
	});
}

export default Component;
