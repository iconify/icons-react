import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/ic3uk7poj.css';
import '../../css/h/hdvfe0bpc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ic3uk7poj"/><path class="hdvfe0bpc"/></g>`,
		"fallback": "streamline:cards",
	});
}

export default Component;
