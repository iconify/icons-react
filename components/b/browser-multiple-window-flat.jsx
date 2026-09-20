import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ejc2sxbrs.css';
import '../../css/f/f2x4o5iih.css';
import '../../css/w/w76luub3a.css';
import '../../css/q/qwqveybtp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ejc2sxbrs"/><path class="f2x4o5iih"/><path clip-rule="evenodd" class="w76luub3a"/><path class="qwqveybtp"/></g>`,
		"fallback": "streamline-color:browser-multiple-window-flat",
	});
}

export default Component;
