import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9vwi7blz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9vwi7blz"/>`,
		"fallback": "selfhst:habitica",
	});
}

export default Component;
