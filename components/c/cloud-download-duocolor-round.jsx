import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gc2kh7r2z.css';
import '../../css/f/fyzhyacrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gc2kh7r2z"/><path class="fyzhyacrs"/></g>`,
		"fallback": "coolicons:cloud-download-duocolor-round",
	});
}

export default Component;
