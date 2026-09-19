import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd_-6ac5m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dd_-6ac5m"/>`,
		"fallback": "fxemoji:anger",
	});
}

export default Component;
