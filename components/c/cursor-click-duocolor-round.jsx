import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aleqeubgz.css';
import '../../css/g/gq5de_b2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="aleqeubgz"/><path class="gq5de_b2y"/></g>`,
		"fallback": "coolicons:cursor-click-duocolor-round",
	});
}

export default Component;
