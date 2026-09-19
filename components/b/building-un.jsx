import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izjzl7b6r.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izjzl7b6r"/>`,
		"fallback": "fa6-solid:building-un",
	});
}

export default Component;
