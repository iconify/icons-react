import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk0vk7bxy.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk0vk7bxy"/>`,
		"fallback": "f7:cloud-hail-fill",
	});
}

export default Component;
