import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt0xhaboe.css';
import '../../css/d/d_rfajbtq.css';
import '../../css/y/yalo82bpm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt0xhaboe"/><path class="d_rfajbtq"/><path class="yalo82bpm"/>`,
		"fallback": "fxemoji:blackpushpin",
	});
}

export default Component;
