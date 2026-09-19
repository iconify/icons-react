import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc6t_n4ay.css';
import '../../css/c/cqrap-bzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zc6t_n4ay"/><path class="cqrap-bzr"/>`,
		"fallback": "bx:bxs-doughnut-chart",
	});
}

export default Component;
