import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmasy2qqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmasy2qqg"/>`,
		"fallback": "boxicons:calendar-star-filled",
	});
}

export default Component;
