import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/t7l9014ic.css';
import '../../css/l/lr0t75zmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="t7l9014ic"/><path class="lr0t75zmj"/></g>`,
		"fallback": "iconoir:energy-usage-window",
	});
}

export default Component;
