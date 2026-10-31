import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wn9f0oder.css';
import '../../css/h/h7-qtfayk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wn9f0oder"/><path class="h7-qtfayk"/></g>`,
		"fallback": "coolicons:ear-duocolor-round",
	});
}

export default Component;
