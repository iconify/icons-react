import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm7bzwy4d.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm7bzwy4d"/>`,
		"fallback": "garden:chevron-double-down-fill-12",
	});
}

export default Component;
