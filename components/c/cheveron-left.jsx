import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2nyl6bcz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2nyl6bcz"/>`,
		"fallback": "zondicons:cheveron-left",
	});
}

export default Component;
