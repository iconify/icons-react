import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptc-d2h3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptc-d2h3y"/>`,
		"fallback": "boxicons:donut-filled",
	});
}

export default Component;
