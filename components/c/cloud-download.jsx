import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8lih5mko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8lih5mko"/>`,
		"fallback": "heroicons-outline:cloud-download",
	});
}

export default Component;
