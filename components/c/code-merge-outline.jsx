import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7-ct5rft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7-ct5rft"/>`,
		"fallback": "flowbite:code-merge-outline",
	});
}

export default Component;
