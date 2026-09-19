import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nt__-0brb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nt__-0brb"/>`,
		"fallback": "at-icons:arrow-up-to-line",
	});
}

export default Component;
