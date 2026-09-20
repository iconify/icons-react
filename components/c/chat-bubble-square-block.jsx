import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lma06ubsd.css';
import '../../css/p/pv15v4b-d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="lma06ubsd"/><path class="pv15v4b-d"/></g>`,
		"fallback": "streamline:chat-bubble-square-block",
	});
}

export default Component;
