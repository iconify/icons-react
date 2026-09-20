import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmlna1m4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmlna1m4x"/>`,
		"fallback": "mdi:calendar-sync",
	});
}

export default Component;
