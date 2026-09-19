import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zg2o2y4jg.css';
import '../../css/e/en2yxb8bj.css';
import '../../css/v/vy5ihzwxr.css';
import '../../css/c/ccw6g8mcq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zg2o2y4jg"/><path clip-rule="evenodd" class="en2yxb8bj"/><path class="vy5ihzwxr"/><path clip-rule="evenodd" class="ccw6g8mcq"/></g>`,
		"fallback": "healthicons:child-program",
	});
}

export default Component;
