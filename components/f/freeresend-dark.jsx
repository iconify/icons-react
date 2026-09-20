import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p90yc2h1l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p90yc2h1l"/>`,
		"fallback": "selfhst:freeresend-dark",
	});
}

export default Component;
