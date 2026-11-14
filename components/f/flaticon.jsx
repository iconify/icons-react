import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j35tcj7js.css';
import '../../css/x/xel42qdja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j35tcj7js"/><path class="xel42qdja"/></g>`,
		"fallback": "hugeicons:flaticon",
	});
}

export default Component;
