import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mpk1byqsw.css';
import '../../css/e/en_-s13zu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mpk1byqsw"/><path class="en_-s13zu"/></g>`,
		"fallback": "coolicons:cactus-duocolor-round",
	});
}

export default Component;
