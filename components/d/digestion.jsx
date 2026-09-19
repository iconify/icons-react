import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t18ii6bfr.css';
import '../../css/x/xlssj9bec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t18ii6bfr"/><path class="xlssj9bec"/></g>`,
		"fallback": "hugeicons:digestion",
	});
}

export default Component;
