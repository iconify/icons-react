import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnykq_boq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnykq_boq"/>`,
		"fallback": "mdi:bug-pause-outline",
	});
}

export default Component;
