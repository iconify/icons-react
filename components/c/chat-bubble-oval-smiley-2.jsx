import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kltjcob_y.css';
import '../../css/u/u_4-lswwb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="kltjcob_y"/><path class="u_4-lswwb"/></g>`,
		"fallback": "streamline:chat-bubble-oval-smiley-2",
	});
}

export default Component;
