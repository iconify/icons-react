import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u5u1subrl.css';
import '../../css/o/o8-e-_blr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u5u1subrl"/><path class="o8-e-_blr"/></g>`,
		"fallback": "coolicons:behance-duocolor-round",
	});
}

export default Component;
