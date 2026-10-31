import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x-8uw3b-x.css';
import '../../css/n/n5iafhovj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x-8uw3b-x"/><path class="n5iafhovj"/></g>`,
		"fallback": "coolicons:chat-circle-dots-duocolor-round",
	});
}

export default Component;
