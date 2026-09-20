import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hrajp-h-t.css';
import '../../css/n/nsyikcbfj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hrajp-h-t"/><path class="nsyikcbfj"/></g>`,
		"fallback": "streamline-flex-color:calendar-mark",
	});
}

export default Component;
