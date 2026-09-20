import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm4rvkc0n.css';
import '../../css/p/p1djqlbbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm4rvkc0n"/><path class="p1djqlbbh"/>`,
		"fallback": "mingcute:campground-fill",
	});
}

export default Component;
