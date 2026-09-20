import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efbm7bbdd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efbm7bbdd"/>`,
		"fallback": "octicon:diff-added-16",
	});
}

export default Component;
