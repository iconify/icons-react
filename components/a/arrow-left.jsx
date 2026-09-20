import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jri6i3b0v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jri6i3b0v"/>`,
		"fallback": "rivet-icons:arrow-left",
	});
}

export default Component;
