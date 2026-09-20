import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqwk__1_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqwk__1_y"/>`,
		"fallback": "streamline-ultimate:cash-briefcase-bold",
	});
}

export default Component;
