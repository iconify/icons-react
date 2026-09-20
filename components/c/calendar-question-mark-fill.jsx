import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnfagub0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnfagub0z"/>`,
		"fallback": "mage:calendar-question-mark-fill",
	});
}

export default Component;
