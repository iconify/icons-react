import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehgdjcc8o.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehgdjcc8o"/>`,
		"fallback": "dinkie-icons:fork",
	});
}

export default Component;
