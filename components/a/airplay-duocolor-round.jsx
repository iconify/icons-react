import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hwnu8acqb.css';
import '../../css/n/nbb7xactf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hwnu8acqb"/><path class="nbb7xactf"/></g>`,
		"fallback": "coolicons:airplay-duocolor-round",
	});
}

export default Component;
