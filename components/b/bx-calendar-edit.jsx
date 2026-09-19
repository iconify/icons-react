import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl7z0xbvn.css';
import '../../css/q/q9j5fk79c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl7z0xbvn"/><path class="q9j5fk79c"/>`,
		"fallback": "bx:bx-calendar-edit",
	});
}

export default Component;
