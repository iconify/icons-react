import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f-kifbbrq.css';
import '../../css/v/v8sxwzb2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f-kifbbrq"/><path class="v8sxwzb2c"/></g>`,
		"fallback": "hugeicons:elearning-exchange",
	});
}

export default Component;
