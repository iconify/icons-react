import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd3xn7bgt.css';
import '../../css/y/yj19_b3-o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd3xn7bgt"/><path class="yj19_b3-o"/>`,
		"fallback": "energy-icons:heat-battery-20-bold",
	});
}

export default Component;
