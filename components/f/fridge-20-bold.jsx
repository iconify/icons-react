import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkj4mhl3n.css';
import '../../css/p/p8l4h7b3m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkj4mhl3n"/><path class="p8l4h7b3m"/>`,
		"fallback": "energy-icons:fridge-20-bold",
	});
}

export default Component;
