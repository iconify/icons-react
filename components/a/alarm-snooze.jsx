import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dw4qe0bkg.css';
import '../../css/n/nw-1wbc5o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="dw4qe0bkg"/><path class="nw-1wbc5o"/></g>`,
		"fallback": "glyphs:alarm-snooze",
	});
}

export default Component;
