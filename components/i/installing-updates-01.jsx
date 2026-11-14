import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/aoq_q1b8r.css';
import '../../css/x/xhh8lwb8s.css';
import '../../css/s/s21fe3vrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="aoq_q1b8r"/><path class="xhh8lwb8s"/><path class="s21fe3vrm"/></g>`,
		"fallback": "hugeicons:installing-updates-01",
	});
}

export default Component;
