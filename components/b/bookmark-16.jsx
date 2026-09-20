import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe7c8fl3u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qe7c8fl3u"/>`,
		"fallback": "octicon:bookmark-16",
	});
}

export default Component;
