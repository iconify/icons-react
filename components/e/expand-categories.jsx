import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7lp7jw1n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7lp7jw1n"/>`,
		"fallback": "carbon:expand-categories",
	});
}

export default Component;
