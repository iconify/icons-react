import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpk8h1bxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpk8h1bxj"/>`,
		"fallback": "pixelarticons:bookmarks",
	});
}

export default Component;
