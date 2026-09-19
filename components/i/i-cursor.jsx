import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wufx3cn9z.css';

const viewBox = {"width":256,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wufx3cn9z"/>`,
		"fallback": "fa-solid:i-cursor",
	});
}

export default Component;
