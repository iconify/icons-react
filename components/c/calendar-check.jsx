import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyez58b8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyez58b8x"/>`,
		"fallback": "bxs:calendar-check",
	});
}

export default Component;
