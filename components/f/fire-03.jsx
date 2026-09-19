import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/m/mns7xzt_q.css';
import '../../css/a/asurohb5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="mns7xzt_q"/><path class="asurohb5q"/></g>`,
		"fallback": "hugeicons:fire-03",
	});
}

export default Component;
