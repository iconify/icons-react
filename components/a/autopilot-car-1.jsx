import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-657w83o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-657w83o"/>`,
		"fallback": "streamline-ultimate:autopilot-car-1",
	});
}

export default Component;
