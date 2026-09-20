import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujj77mcql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujj77mcql"/>`,
		"fallback": "mingcute:az-sort-descending-letters-fill",
	});
}

export default Component;
