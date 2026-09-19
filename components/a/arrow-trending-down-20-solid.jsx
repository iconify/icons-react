import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8jj3acng.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i8jj3acng"/>`,
		"fallback": "heroicons:arrow-trending-down-20-solid",
	});
}

export default Component;
