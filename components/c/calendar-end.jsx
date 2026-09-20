import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgh8kzkar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgh8kzkar"/>`,
		"fallback": "mdi:calendar-end",
	});
}

export default Component;
