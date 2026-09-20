import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdov0ybnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdov0ybnz"/>`,
		"fallback": "keyline-icons:chart-line-increasing-sharp",
	});
}

export default Component;
