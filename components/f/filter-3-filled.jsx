import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd3xdgnmp.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd3xdgnmp"/>`,
		"fallback": "tdesign:filter-3-filled",
	});
}

export default Component;
