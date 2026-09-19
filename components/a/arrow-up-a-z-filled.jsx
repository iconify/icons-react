import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii2hbuh9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii2hbuh9c"/>`,
		"fallback": "boxicons:arrow-up-a-z-filled",
	});
}

export default Component;
