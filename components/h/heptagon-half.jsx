import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g30qnl7bh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g30qnl7bh"/>`,
		"fallback": "bi:heptagon-half",
	});
}

export default Component;
