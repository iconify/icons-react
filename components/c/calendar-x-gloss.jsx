import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5_r1abvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5_r1abvu"/>`,
		"fallback": "withicons:calendar-x-gloss",
	});
}

export default Component;
