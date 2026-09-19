import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r-qd7_b_c.css';
import '../../css/f/f9iub6b_k.css';
import '../../css/h/hushrnb6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r-qd7_b_c"/><path class="f9iub6b_k"/><path class="hushrnb6b"/></g>`,
		"fallback": "hugeicons:beef-off",
	});
}

export default Component;
