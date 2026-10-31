import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j4vzbdcfo.css';
import '../../css/r/rlxi8fbwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j4vzbdcfo"/><path class="rlxi8fbwi"/></g>`,
		"fallback": "coolicons:cookie-duocolor-round",
	});
}

export default Component;
