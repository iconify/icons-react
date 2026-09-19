import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t0ei0haup.css';
import '../../css/o/o2ec1zj_v.css';
import '../../css/u/uqvdeh28u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t0ei0haup"/><path class="o2ec1zj_v"/><path class="uqvdeh28u"/></g>`,
		"fallback": "hugeicons:calendar-mortarboard",
	});
}

export default Component;
