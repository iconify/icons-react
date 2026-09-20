import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrjp8zb7w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrjp8zb7w"/>`,
		"fallback": "lsicon:circle-close-outline",
	});
}

export default Component;
