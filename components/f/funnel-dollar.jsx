import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb8yqhies.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb8yqhies"/>`,
		"fallback": "la:funnel-dollar",
	});
}

export default Component;
