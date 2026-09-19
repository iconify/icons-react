import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j84lrp6hr.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j84lrp6hr"/>`,
		"fallback": "fa-brands:acquisitions-incorporated",
	});
}

export default Component;
