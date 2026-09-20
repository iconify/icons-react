import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7ovy1b6b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7ovy1b6b"/>`,
		"fallback": "lsicon:delete-outline",
	});
}

export default Component;
