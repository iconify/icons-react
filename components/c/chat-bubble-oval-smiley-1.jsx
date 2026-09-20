import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kltjcob_y.css';
import '../../css/p/phf58cc5g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="kltjcob_y"/><path class="phf58cc5g"/></g>`,
		"fallback": "streamline:chat-bubble-oval-smiley-1",
	});
}

export default Component;
