import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyx02_bvh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyx02_bvh"/>`,
		"fallback": "teenyicons:arrow-down-circle-outline",
	});
}

export default Component;
