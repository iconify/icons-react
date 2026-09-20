import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2aj5q4dy.css';
import '../../css/w/wvwuueb-e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2aj5q4dy"/><path class="wvwuueb-e"/>`,
		"fallback": "selfhst:apache-superset",
	});
}

export default Component;
