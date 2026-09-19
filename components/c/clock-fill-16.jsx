import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1kt5xcuf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1kt5xcuf"/>`,
		"fallback": "garden:clock-fill-16",
	});
}

export default Component;
