import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqys8njih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqys8njih"/>`,
		"fallback": "eva:bookmark-fill",
	});
}

export default Component;
