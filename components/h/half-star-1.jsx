import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k78xr_h_b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k78xr_h_b"/>`,
		"fallback": "streamline:half-star-1",
	});
}

export default Component;
