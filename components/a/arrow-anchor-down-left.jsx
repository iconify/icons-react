import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsvmkibba.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsvmkibba"/>`,
		"fallback": "rivet-icons:arrow-anchor-down-left",
	});
}

export default Component;
