import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q3furptaz.css';
import '../../css/v/vv0lv1y-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q3furptaz"/><path class="vv0lv1y-c"/></g>`,
		"fallback": "hugeicons:bean-off",
	});
}

export default Component;
