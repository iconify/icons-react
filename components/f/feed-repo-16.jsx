import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj9s6j9ek.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj9s6j9ek"/>`,
		"fallback": "octicon:feed-repo-16",
	});
}

export default Component;
