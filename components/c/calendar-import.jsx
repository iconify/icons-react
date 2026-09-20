import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x06nz3bse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x06nz3bse"/>`,
		"fallback": "mdi:calendar-import",
	});
}

export default Component;
