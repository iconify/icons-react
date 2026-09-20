import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j82xngbkj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j82xngbkj"/>`,
		"fallback": "lsicon:clear-outline",
	});
}

export default Component;
