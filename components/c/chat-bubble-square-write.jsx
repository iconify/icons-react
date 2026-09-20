import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t0veyid1s.css';
import '../../css/r/r5lb-sbae.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="t0veyid1s"/><path class="r5lb-sbae"/></g>`,
		"fallback": "streamline:chat-bubble-square-write",
	});
}

export default Component;
