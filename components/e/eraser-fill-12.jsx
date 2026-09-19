import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjsfgvb4f.css';
import '../../css/u/unp6d04od.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjsfgvb4f"/><path class="unp6d04od"/>`,
		"fallback": "garden:eraser-fill-12",
	});
}

export default Component;
