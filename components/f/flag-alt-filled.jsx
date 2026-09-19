import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us0n5v1sk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us0n5v1sk"/>`,
		"fallback": "griddy-icons:flag-alt-filled",
	});
}

export default Component;
