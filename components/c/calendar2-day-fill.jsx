import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nka7vccuk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nka7vccuk"/>`,
		"fallback": "bi:calendar2-day-fill",
	});
}

export default Component;
