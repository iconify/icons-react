import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0hdih8qf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0hdih8qf"/>`,
		"fallback": "carbon:folder-off",
	});
}

export default Component;
