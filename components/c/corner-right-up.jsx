import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v-66i4bfz.css';
import '../../css/o/o0tc4gtrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v-66i4bfz"/><path class="o0tc4gtrz"/></g>`,
		"fallback": "hugeicons:corner-right-up",
	});
}

export default Component;
