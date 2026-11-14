import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/idhzit1_z.css';
import '../../css/t/t9yu593hb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="idhzit1_z"/><path class="t9yu593hb"/></g>`,
		"fallback": "hugeicons:activity-03",
	});
}

export default Component;
