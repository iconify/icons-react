import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pv15v4b-d.css';
import '../../css/k/kv-iyrbbp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pv15v4b-d"/><path class="kv-iyrbbp"/></g>`,
		"fallback": "streamline:chat-bubble-square-question",
	});
}

export default Component;
