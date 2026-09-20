import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wpo-pxecu.css';
import '../../css/e/e7-bm93mi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wpo-pxecu"/><path class="e7-bm93mi"/></g>`,
		"fallback": "streamline-freehand:disability-walking-help-1",
	});
}

export default Component;
