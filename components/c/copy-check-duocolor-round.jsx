import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/ps2grmsyv.css';
import '../../css/f/fyya0nbto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ps2grmsyv"/><path class="fyya0nbto"/></g>`,
		"fallback": "coolicons:copy-check-duocolor-round",
	});
}

export default Component;
