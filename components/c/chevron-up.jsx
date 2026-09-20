import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wewv2-b6p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wewv2-b6p"/>`,
		"fallback": "rivet-icons:chevron-up",
	});
}

export default Component;
