import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjt7edbyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjt7edbyz"/>`,
		"fallback": "flowbite:file-search-outline",
	});
}

export default Component;
