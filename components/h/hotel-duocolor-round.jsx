import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/ru57a09hd.css';
import '../../css/q/qkaecqabr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ru57a09hd"/><path class="qkaecqabr"/></g>`,
		"fallback": "coolicons:hotel-duocolor-round",
	});
}

export default Component;
