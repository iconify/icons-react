import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tuv29vqrx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tuv29vqrx"/>`,
		"fallback": "at-icons:golf-club",
	});
}

export default Component;
