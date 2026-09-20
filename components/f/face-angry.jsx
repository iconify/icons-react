import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y571l1bgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y571l1bgh"/>`,
		"fallback": "keyline-icons:face-angry",
	});
}

export default Component;
