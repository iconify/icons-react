import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lok1r60yf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lok1r60yf"/>`,
		"fallback": "subway:glass",
	});
}

export default Component;
