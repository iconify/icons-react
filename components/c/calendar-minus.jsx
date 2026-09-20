import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1fsbgbhg.css';
import '../../css/y/y77g97bjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1fsbgbhg"/><path class="y77g97bjh"/>`,
		"fallback": "prime:calendar-minus",
	});
}

export default Component;
