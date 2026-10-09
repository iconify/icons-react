import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p483qmvuq.css';
import '../../css/i/i30_rk_1l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p483qmvuq"/><path class="i30_rk_1l"/>`,
		"fallback": "energy-icons:ammonia-20-bold",
	});
}

export default Component;
