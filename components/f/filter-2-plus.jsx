import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt_-b4bfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt_-b4bfb"/>`,
		"fallback": "tabler:filter-2-plus",
	});
}

export default Component;
