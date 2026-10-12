import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm5j5xizl.css';
import '../../css/k/kbq43k7wn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm5j5xizl"/><path class="kbq43k7wn"/>`,
		"fallback": "energy-icons:discount-20-bold",
	});
}

export default Component;
