import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p29qewj3b.css';
import '../../css/l/l8nc8mbmh.css';
import '../../css/p/pnwe4yxad.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p29qewj3b"/><path class="l8nc8mbmh"/><path class="pnwe4yxad"/>`,
		"fallback": "energy-icons:freezing-rain-20-bold",
	});
}

export default Component;
