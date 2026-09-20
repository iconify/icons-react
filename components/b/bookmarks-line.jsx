import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3d9nyy4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3d9nyy4o"/>`,
		"fallback": "mingcute:bookmarks-line",
	});
}

export default Component;
