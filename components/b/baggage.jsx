import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z4-uwkb9v.css';
import '../../css/w/w48_bbbha.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z4-uwkb9v"/><path class="w48_bbbha"/></g>`,
		"fallback": "streamline-color:baggage",
	});
}

export default Component;
