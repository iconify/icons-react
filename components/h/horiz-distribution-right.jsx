import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcr6e9rss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcr6e9rss"/>`,
		"fallback": "iconoir:horiz-distribution-right",
	});
}

export default Component;
