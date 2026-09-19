import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6i33fofh.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6i33fofh"/>`,
		"fallback": "fa6-brands:hips",
	});
}

export default Component;
