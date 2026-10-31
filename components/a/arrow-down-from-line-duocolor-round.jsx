import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hl_mejm0r.css';
import '../../css/t/teuvcactv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hl_mejm0r"/><path class="teuvcactv"/></g>`,
		"fallback": "coolicons:arrow-down-from-line-duocolor-round",
	});
}

export default Component;
