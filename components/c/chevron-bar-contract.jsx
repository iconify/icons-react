import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q50x75u1q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q50x75u1q"/>`,
		"fallback": "bi:chevron-bar-contract",
	});
}

export default Component;
