import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhf3-7eiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhf3-7eiv"/>`,
		"fallback": "bxs:home-smile",
	});
}

export default Component;
