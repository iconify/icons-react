import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_9idcc2u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_9idcc2u"/>`,
		"fallback": "garden:chevron-double-up-fill-16",
	});
}

export default Component;
