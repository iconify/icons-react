import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/v/v9y0gn34v.css';
import '../../css/e/e4td9hbqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="v9y0gn34v"/><path class="e4td9hbqk"/></g>`,
		"fallback": "hugeicons:bitcoin-eye",
	});
}

export default Component;
