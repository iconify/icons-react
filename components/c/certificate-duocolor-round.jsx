import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tlhce0b5x.css';
import '../../css/n/ntyt7mipc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tlhce0b5x"/><path class="ntyt7mipc"/></g>`,
		"fallback": "coolicons:certificate-duocolor-round",
	});
}

export default Component;
