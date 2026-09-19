import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1idh6b0g.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1idh6b0g"/>`,
		"fallback": "garden:arrow-retweet-fill-12",
	});
}

export default Component;
