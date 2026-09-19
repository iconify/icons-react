import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/t-2uyek1g.css';
import '../../css/c/ct_y8nbep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="t-2uyek1g"/><path class="ct_y8nbep"/></g>`,
		"fallback": "hugeicons:fire-02",
	});
}

export default Component;
