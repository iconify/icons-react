import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmmr71bba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmmr71bba"/>`,
		"fallback": "mdi:event-week-outline",
	});
}

export default Component;
