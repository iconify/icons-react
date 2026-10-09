import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkz17l6zd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkz17l6zd"/>`,
		"fallback": "energy-icons:crown-20-bold",
	});
}

export default Component;
