import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zq0khxb8s.css';
import '../../css/w/w2fjagbrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zq0khxb8s"/><path class="w2fjagbrz"/></g>`,
		"fallback": "hugeicons:archive-arrow-down",
	});
}

export default Component;
