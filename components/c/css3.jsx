import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dpq6rsb-m.css';
import '../../css/z/zj8vb1o7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dpq6rsb-m"/><path class="zj8vb1o7d"/></g>`,
		"fallback": "iconoir:css3",
	});
}

export default Component;
