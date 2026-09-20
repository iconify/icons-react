import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/e6d79qrxr.css';
import '../../css/t/tkp_8ackj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="e6d79qrxr"/><path class="tkp_8ackj"/></g>`,
		"fallback": "keyline-icons:inbox-sharp-two-tone",
	});
}

export default Component;
