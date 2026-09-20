import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl5h9i1sm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl5h9i1sm"/>`,
		"fallback": "keyline-icons:calendar-check",
	});
}

export default Component;
