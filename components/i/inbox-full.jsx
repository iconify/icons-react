import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr5a20y1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr5a20y1u"/>`,
		"fallback": "mdi:inbox-full",
	});
}

export default Component;
