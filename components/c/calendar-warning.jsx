import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbj30sd-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbj30sd-a"/>`,
		"fallback": "mdi:calendar-warning",
	});
}

export default Component;
