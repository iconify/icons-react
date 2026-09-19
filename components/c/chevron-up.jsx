import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8ygnl_-i.css';

const viewBox = {"width":1664,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8ygnl_-i"/>`,
		"fallback": "fa:chevron-up",
	});
}

export default Component;
