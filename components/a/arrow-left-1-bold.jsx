import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9qfofobu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9qfofobu"/>`,
		"fallback": "iconamoon:arrow-left-1-bold",
	});
}

export default Component;
