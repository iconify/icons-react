import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5l0-3b_k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5l0-3b_k"/>`,
		"fallback": "roentgen:human",
	});
}

export default Component;
