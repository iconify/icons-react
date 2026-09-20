import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu-lndb2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu-lndb2w"/>`,
		"fallback": "mdi:car-coolant-level",
	});
}

export default Component;
