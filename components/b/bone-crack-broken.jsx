import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/di7udt8bv.css';
import '../../css/q/q1vo1cbxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="di7udt8bv"/><path class="q1vo1cbxq"/></g>`,
		"fallback": "solar:bone-crack-broken",
	});
}

export default Component;
