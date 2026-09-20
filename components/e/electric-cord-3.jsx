import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q1ranjkir.css';
import '../../css/c/cigg5_wjf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="q1ranjkir"/><path class="cigg5_wjf"/></g>`,
		"fallback": "streamline:electric-cord-3",
	});
}

export default Component;
