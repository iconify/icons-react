import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cemr4cbrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cemr4cbrb"/>`,
		"fallback": "pixelarticons:briefcase-delete",
	});
}

export default Component;
