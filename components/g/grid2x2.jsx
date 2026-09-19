import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/z/zyeltnuhl.css';
import '../../css/u/u70bcrbqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="zyeltnuhl"/><path class="u70bcrbqy"/></g>`,
		"fallback": "hugeicons:grid2x2",
	});
}

export default Component;
