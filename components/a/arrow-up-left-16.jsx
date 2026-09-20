import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0xk0jbjd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0xk0jbjd"/>`,
		"fallback": "qlementine-icons:arrow-up-left-16",
	});
}

export default Component;
