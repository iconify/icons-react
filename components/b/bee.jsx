import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv2yfwb4u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv2yfwb4u"/>`,
		"fallback": "roentgen:bee",
	});
}

export default Component;
