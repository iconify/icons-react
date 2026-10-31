import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/yjch1vbma.css';
import '../../css/e/etloo2bzr.css';
import '../../css/n/nk9d_927f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow yjch1vbma"/><path class="etloo2bzr wm-shadow"/><path class="nk9d_927f"/></g>`,
		"fallback": "withicons-brutal:fingerprint",
	});
}

export default Component;
