import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ht_1znvpm.css';
import '../../css/p/prerz-7qh.css';
import '../../css/i/ik5ffsmmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ht_1znvpm"/><path class="prerz-7qh"/><path class="ik5ffsmmy"/></g>`,
		"fallback": "majesticons:calendar-plus",
	});
}

export default Component;
