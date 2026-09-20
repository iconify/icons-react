import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e0dqqne-p.css';
import '../../css/s/szttc_btm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e0dqqne-p"/><path class="szttc_btm"/></g>`,
		"fallback": "majesticons:chats",
	});
}

export default Component;
