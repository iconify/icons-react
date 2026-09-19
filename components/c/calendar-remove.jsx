import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e17znrb2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e17znrb2r"/>`,
		"fallback": "iconamoon:calendar-remove",
	});
}

export default Component;
