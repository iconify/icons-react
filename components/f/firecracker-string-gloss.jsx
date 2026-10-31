import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/ofguzw4ec.css';
import '../../css/z/zwcjkvs-i.css';
import '../../css/f/f7q7occ5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ofguzw4ec wm-a"/><path class="wm-k zwcjkvs-i"/><path class="f7q7occ5e wm-s"/></g>`,
		"fallback": "withicons:firecracker-string-gloss",
	});
}

export default Component;
