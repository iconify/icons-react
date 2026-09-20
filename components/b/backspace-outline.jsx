import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0zuiacsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0zuiacsa"/>`,
		"fallback": "mdi:backspace-outline",
	});
}

export default Component;
