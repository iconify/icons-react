import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk6drtbrj.css';
import '../../css/t/t2iyet0dj.css';
import '../../css/g/ga8o6nb9m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xk6drtbrj"/><path class="t2iyet0dj"/><path class="ga8o6nb9m"/>`,
		"fallback": "energy-icons:arrow-left-right-20-bold",
	});
}

export default Component;
