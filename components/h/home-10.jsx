import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o_e9bzw-o.css';
import '../../css/o/oszh--blj.css';
import '../../css/h/hrr5vnrqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o_e9bzw-o"/><path class="oszh--blj"/><path class="hrr5vnrqn"/></g>`,
		"fallback": "hugeicons:home-10",
	});
}

export default Component;
