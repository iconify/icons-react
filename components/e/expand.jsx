import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js0k_jnzn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="js0k_jnzn"/>`,
		"fallback": "oui:expand",
	});
}

export default Component;
