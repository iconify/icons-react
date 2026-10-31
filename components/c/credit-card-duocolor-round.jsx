import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bjui17z2n.css';
import '../../css/b/b0_ek8b-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bjui17z2n"/><path class="b0_ek8b-b"/></g>`,
		"fallback": "coolicons:credit-card-duocolor-round",
	});
}

export default Component;
