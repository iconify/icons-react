import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywi6inb_q.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywi6inb_q"/>`,
		"fallback": "dinkie-icons:contrast-filled",
	});
}

export default Component;
