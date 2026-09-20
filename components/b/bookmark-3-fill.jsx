import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izhxi_b3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izhxi_b3t"/>`,
		"fallback": "ri:bookmark-3-fill",
	});
}

export default Component;
