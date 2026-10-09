import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz09zhb4u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz09zhb4u"/>`,
		"fallback": "energy-icons:chevron-up-20",
	});
}

export default Component;
