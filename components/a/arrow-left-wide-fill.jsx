import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmq6uom3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmq6uom3h"/>`,
		"fallback": "ri:arrow-left-wide-fill",
	});
}

export default Component;
