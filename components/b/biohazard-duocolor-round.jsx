import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bjp0usbso.css';
import '../../css/u/urp0a5bwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bjp0usbso"/><path class="urp0a5bwc"/></g>`,
		"fallback": "coolicons:biohazard-duocolor-round",
	});
}

export default Component;
