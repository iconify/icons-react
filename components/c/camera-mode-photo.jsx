import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e78xdf2xc.css';
import '../../css/l/ln46xcbve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="e78xdf2xc"/><path class="ln46xcbve"/></g>`,
		"fallback": "streamline-freehand:camera-mode-photo",
	});
}

export default Component;
