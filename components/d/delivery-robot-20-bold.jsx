import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbk_it7zx.css';
import '../../css/m/m9fufbb8m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbk_it7zx"/><path class="m9fufbb8m"/>`,
		"fallback": "energy-icons:delivery-robot-20-bold",
	});
}

export default Component;
