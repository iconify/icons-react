import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zoy5q4b1r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zoy5q4b1r"/>`,
		"fallback": "heroicons-solid:folder-plus",
	});
}

export default Component;
