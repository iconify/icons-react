import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy45tmhze.css';
import '../../css/g/ga0yskbrz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy45tmhze"/><path class="ga0yskbrz"/>`,
		"fallback": "garden:book-closed-fill-16",
	});
}

export default Component;
