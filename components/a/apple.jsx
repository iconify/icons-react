import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wbupceajx.css';
import '../../css/l/l8pmv5swk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wbupceajx"/><path class="l8pmv5swk"/></g>`,
		"fallback": "streamline-color:apple",
	});
}

export default Component;
