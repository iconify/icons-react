import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_j8j347h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_j8j347h"/>`,
		"fallback": "boxicons:card-view-tiles",
	});
}

export default Component;
