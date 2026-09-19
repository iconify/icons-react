import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l2iew4b8d.css';
import '../../css/h/hcev0sb5i.css';
import '../../css/j/j7v6lsk2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="l2iew4b8d"/><path class="hcev0sb5i"/><path class="j7v6lsk2x"/></g>`,
		"fallback": "hugeicons:floor-plan",
	});
}

export default Component;
