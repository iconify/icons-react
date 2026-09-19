import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blhfqe0dt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blhfqe0dt"/>`,
		"fallback": "garden:box-3d-stroke-16",
	});
}

export default Component;
