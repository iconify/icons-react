import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lq7x7ib4l.css';
import '../../css/s/sax0978dp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="lq7x7ib4l"/><path class="sax0978dp"/></g>`,
		"fallback": "keyline-icons:cursor-signal-fill",
	});
}

export default Component;
