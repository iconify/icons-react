import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5placc-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5placc-o"/>`,
		"fallback": "mdi:clock-time-twelve",
	});
}

export default Component;
