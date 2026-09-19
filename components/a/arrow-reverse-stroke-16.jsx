import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n59q3lk4h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n59q3lk4h"/>`,
		"fallback": "garden:arrow-reverse-stroke-16",
	});
}

export default Component;
