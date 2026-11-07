import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_29zdb8m.css';
import '../../css/o/o_-k6sb8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_29zdb8m"/><path clip-rule="evenodd" class="o_-k6sb8v"/>`,
		"fallback": "solar:calendar-date-bold",
	});
}

export default Component;
