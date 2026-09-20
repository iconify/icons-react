import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpm_1gptr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpm_1gptr"/>`,
		"fallback": "octicon:feed-discussion-16",
	});
}

export default Component;
