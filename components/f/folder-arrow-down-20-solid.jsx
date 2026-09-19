import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5q6tg5iy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r5q6tg5iy"/>`,
		"fallback": "heroicons:folder-arrow-down-20-solid",
	});
}

export default Component;
