import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rldsg_bho.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rldsg_bho"/>`,
		"fallback": "bi:hourglass-bottom",
	});
}

export default Component;
