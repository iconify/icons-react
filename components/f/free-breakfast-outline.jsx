import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/om1j0hb6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="om1j0hb6k"/>`,
		"fallback": "mdi:free-breakfast-outline",
	});
}

export default Component;
