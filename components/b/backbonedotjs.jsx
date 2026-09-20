import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx6xl1bur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx6xl1bur"/>`,
		"fallback": "simple-icons:backbonedotjs",
	});
}

export default Component;
