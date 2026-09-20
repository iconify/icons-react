import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb0-klyri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb0-klyri"/>`,
		"fallback": "mdi:battery-charging-20",
	});
}

export default Component;
