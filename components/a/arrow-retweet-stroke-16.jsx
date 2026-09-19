import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vry7g_bdw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vry7g_bdw"/>`,
		"fallback": "garden:arrow-retweet-stroke-16",
	});
}

export default Component;
