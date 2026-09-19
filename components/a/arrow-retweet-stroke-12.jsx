import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sib82zv6r.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sib82zv6r"/>`,
		"fallback": "garden:arrow-retweet-stroke-12",
	});
}

export default Component;
