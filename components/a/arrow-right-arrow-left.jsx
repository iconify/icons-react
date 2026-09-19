import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwl9mh0ik.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwl9mh0ik"/>`,
		"fallback": "at-icons:arrow-right-arrow-left",
	});
}

export default Component;
