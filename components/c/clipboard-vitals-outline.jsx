import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl8v88buh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl8v88buh"/>`,
		"fallback": "mdi:clipboard-vitals-outline",
	});
}

export default Component;
