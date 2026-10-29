import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/omra4z-ek.css';
import '../../css/t/tej4gvqiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="omra4z-ek wm-k"/><path class="tej4gvqiy wm-a"/></g>`,
		"fallback": "withicons:banana-sketch",
	});
}

export default Component;
