import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qkpf7-2jn.css';
import '../../css/n/nnzchgbnn.css';
import '../../css/n/nmlvcvbwo.css';
import '../../css/v/veugdrt9f.css';
import '../../css/d/dcsheabll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qkpf7-2jn wm-shadow"/><path class="nnzchgbnn wm-shadow"/><path class="nmlvcvbwo"/><path class="veugdrt9f"/><path class="dcsheabll"/></g>`,
		"fallback": "withicons-brutal:id-card",
	});
}

export default Component;
