import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zw4fk4mhq.css';
import '../../css/f/fyzhyacrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zw4fk4mhq"/><path class="fyzhyacrs"/></g>`,
		"fallback": "coolicons:cloud-close-duocolor-round",
	});
}

export default Component;
