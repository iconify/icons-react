import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h4dcivbds.css';
import '../../css/r/r07163bni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="h4dcivbds wm-k"/><path class="r07163bni wm-s"/></g>`,
		"fallback": "withicons:heater-gloss",
	});
}

export default Component;
