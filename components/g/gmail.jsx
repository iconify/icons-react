import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/f2zm23l_t.css';
import '../../css/r/ru6521tmc.css';
import '../../css/v/v0bj6ccce.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="f2zm23l_t"/><path class="ru6521tmc"/><path class="v0bj6ccce"/></g>`,
		"fallback": "streamline:gmail",
	});
}

export default Component;
