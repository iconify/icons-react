import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg3p3ab6u.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lg3p3ab6u"/>`,
		"fallback": "garden:chevron-down-stroke-12",
	});
}

export default Component;
