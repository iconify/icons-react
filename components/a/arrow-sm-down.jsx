import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q68znnb5q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q68znnb5q"/>`,
		"fallback": "heroicons-solid:arrow-sm-down",
	});
}

export default Component;
