import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pws8e8a-e.css';
import '../../css/x/xel42qdja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pws8e8a-e"/><path class="xel42qdja"/></g>`,
		"fallback": "hugeicons:flaticon",
	});
}

export default Component;
