import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3-x1t1gm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3-x1t1gm"/>`,
		"fallback": "qlementine-icons:funnel-crossed-16",
	});
}

export default Component;
