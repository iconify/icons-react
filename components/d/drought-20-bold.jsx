import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-qd9mblz.css';
import '../../css/a/askx5vbyu.css';
import '../../css/v/vts463bjl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-qd9mblz"/><path class="askx5vbyu"/><path class="vts463bjl"/>`,
		"fallback": "energy-icons:drought-20-bold",
	});
}

export default Component;
