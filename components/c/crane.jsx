import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yv--zb7jx.css';
import '../../css/v/v_qpfkblz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yv--zb7jx"/><path class="v_qpfkblz"/></g>`,
		"fallback": "at-icons:crane",
	});
}

export default Component;
