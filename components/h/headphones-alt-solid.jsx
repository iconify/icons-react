import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4c4gvlqf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4c4gvlqf"/>`,
		"fallback": "la:headphones-alt-solid",
	});
}

export default Component;
