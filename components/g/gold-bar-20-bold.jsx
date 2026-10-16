import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yoqkmxbwv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yoqkmxbwv"/>`,
		"fallback": "energy-icons:gold-bar-20-bold",
	});
}

export default Component;
