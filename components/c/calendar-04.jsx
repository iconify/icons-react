import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzqqceb0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzqqceb0a"/>`,
		"fallback": "hugeicons:calendar-04",
	});
}

export default Component;
