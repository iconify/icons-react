import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h-kg1ebhc.css';
import '../../css/q/qp811ibeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="h-kg1ebhc"/><path class="qp811ibeb"/></g>`,
		"fallback": "hugeicons:call-spark-02",
	});
}

export default Component;
