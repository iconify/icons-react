import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjvd_wblo.css';
import '../../css/c/cibdfcbfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjvd_wblo"/><path class="cibdfcbfl"/>`,
		"fallback": "circum:bookmark-remove",
	});
}

export default Component;
