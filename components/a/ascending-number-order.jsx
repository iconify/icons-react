import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/a3sj2hf_e.css';
import '../../css/h/h2iytgb6l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="a3sj2hf_e"/><path class="h2iytgb6l"/></g>`,
		"fallback": "streamline:ascending-number-order",
	});
}

export default Component;
