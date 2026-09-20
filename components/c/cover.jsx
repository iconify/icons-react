import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx5jw_byh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx5jw_byh"/>`,
		"fallback": "subway:cover",
	});
}

export default Component;
