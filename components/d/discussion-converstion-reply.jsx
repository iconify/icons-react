import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oy4yodd0d.css';
import '../../css/y/y2h3ssblz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="oy4yodd0d"/><path class="y2h3ssblz"/></g>`,
		"fallback": "streamline:discussion-converstion-reply",
	});
}

export default Component;
