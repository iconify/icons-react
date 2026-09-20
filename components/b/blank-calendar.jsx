import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i01r7f9qk.css';
import '../../css/i/injm7lbxy.css';
import '../../css/j/jhuabt8zo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i01r7f9qk"/><path class="injm7lbxy"/><path class="jhuabt8zo"/></g>`,
		"fallback": "streamline-flex-color:blank-calendar",
	});
}

export default Component;
