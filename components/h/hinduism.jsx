import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xfv19bb5z.css';
import '../../css/w/w_amnh96l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xfv19bb5z"/><path class="w_amnh96l"/></g>`,
		"fallback": "streamline:hinduism",
	});
}

export default Component;
