import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1l6yn6av.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1l6yn6av"/>`,
		"fallback": "streamline-block:content-write",
	});
}

export default Component;
