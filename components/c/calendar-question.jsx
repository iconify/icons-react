import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovlb1y99d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovlb1y99d"/>`,
		"fallback": "noviair-light:calendar-question",
	});
}

export default Component;
