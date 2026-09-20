import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlg8d3b5q.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlg8d3b5q"/>`,
		"fallback": "memory:bug-fill",
	});
}

export default Component;
