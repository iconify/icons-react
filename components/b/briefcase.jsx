import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9_r145xx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9_r145xx"/>`,
		"fallback": "bi:briefcase",
	});
}

export default Component;
