import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5d7bg7bh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5d7bg7bh"/>`,
		"fallback": "at-icons:armor-helmet",
	});
}

export default Component;
