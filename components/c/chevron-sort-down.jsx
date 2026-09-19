import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efn51qbix.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efn51qbix"/>`,
		"fallback": "carbon:chevron-sort-down",
	});
}

export default Component;
