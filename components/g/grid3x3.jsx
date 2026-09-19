import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/f/fw0lsufag.css';
import '../../css/z/zyeltnuhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="fw0lsufag"/><path class="zyeltnuhl"/></g>`,
		"fallback": "hugeicons:grid3x3",
	});
}

export default Component;
