import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s75y5vt7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s75y5vt7z"/>`,
		"fallback": "mdi:car-seat-heater",
	});
}

export default Component;
