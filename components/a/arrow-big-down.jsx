import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyb0b6a3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyb0b6a3x"/>`,
		"fallback": "boxicons:arrow-big-down",
	});
}

export default Component;
