import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne8-4acba.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne8-4acba"/>`,
		"fallback": "subway:brush",
	});
}

export default Component;
