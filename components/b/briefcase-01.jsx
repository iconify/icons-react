import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k7hp-b_if.css';
import '../../css/i/ibak7q5lv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k7hp-b_if"/><path class="ibak7q5lv"/></g>`,
		"fallback": "hugeicons:briefcase-01",
	});
}

export default Component;
