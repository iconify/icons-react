import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h_mn9ybmc.css';
import '../../css/a/a4-4zob5u.css';
import '../../css/i/icnalvben.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="h_mn9ybmc"/><path class="a4-4zob5u"/><path class="icnalvben"/></g>`,
		"fallback": "pepicons-print:camera",
	});
}

export default Component;
