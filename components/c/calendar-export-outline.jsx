import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf8jbf8en.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf8jbf8en"/>`,
		"fallback": "mdi:calendar-export-outline",
	});
}

export default Component;
