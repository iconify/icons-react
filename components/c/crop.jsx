import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs7c-ub3q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zs7c-ub3q"/>`,
		"fallback": "vaadin:crop",
	});
}

export default Component;
