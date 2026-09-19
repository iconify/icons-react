import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/y00l3vb7a.css';
import '../../css/c/cw4ci6bcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="y00l3vb7a"/><path class="cw4ci6bcz"/></g>`,
		"fallback": "hugeicons:badge-percent",
	});
}

export default Component;
