import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2u9jmb8z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2u9jmb8z"/>`,
		"fallback": "at-icons:ingot",
	});
}

export default Component;
