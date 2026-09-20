import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te3rrmvax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te3rrmvax"/>`,
		"fallback": "keyline-icons:cloud-rain",
	});
}

export default Component;
