import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iuthe4h4z.css';
import '../../css/p/pposv4bey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="iuthe4h4z"/><path class="pposv4bey"/></g>`,
		"fallback": "coolicons:chat-sparkle-duocolor-round",
	});
}

export default Component;
