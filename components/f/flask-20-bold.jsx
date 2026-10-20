import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkj27_b_o.css';
import '../../css/y/yhsrnr9wa.css';
import '../../css/w/w-lq_-7kx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkj27_b_o"/><path class="yhsrnr9wa"/><path class="w-lq_-7kx"/>`,
		"fallback": "energy-icons:flask-20-bold",
	});
}

export default Component;
