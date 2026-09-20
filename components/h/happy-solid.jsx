import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj7m1sbdj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yj7m1sbdj"/>`,
		"fallback": "rivet-icons:happy-solid",
	});
}

export default Component;
