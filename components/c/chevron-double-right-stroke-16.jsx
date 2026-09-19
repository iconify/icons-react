import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qoqo4lbae.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qoqo4lbae"/>`,
		"fallback": "garden:chevron-double-right-stroke-16",
	});
}

export default Component;
