import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w86jsuh9i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w86jsuh9i"/>`,
		"fallback": "selfhst:cyberhaven-dark",
	});
}

export default Component;
