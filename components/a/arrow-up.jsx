import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv4l4ob-f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv4l4ob-f"/>`,
		"fallback": "at-icons:arrow-up",
	});
}

export default Component;
