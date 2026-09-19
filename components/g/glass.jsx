import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzp5z8b_m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzp5z8b_m"/>`,
		"fallback": "at-icons:glass",
	});
}

export default Component;
