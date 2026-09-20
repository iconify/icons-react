import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds35rsb-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds35rsb-q"/>`,
		"fallback": "streamline-ultimate:cash-search-bold",
	});
}

export default Component;
