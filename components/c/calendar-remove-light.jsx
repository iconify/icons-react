import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiwnycz9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oiwnycz9d"/>`,
		"fallback": "iconamoon:calendar-remove-light",
	});
}

export default Component;
