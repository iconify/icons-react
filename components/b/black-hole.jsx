import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f0bk2xb2x.css';
import '../../css/k/kwynr4q2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f0bk2xb2x"/><path class="kwynr4q2b"/></g>`,
		"fallback": "hugeicons:black-hole",
	});
}

export default Component;
