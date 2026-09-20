import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr8ituh-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr8ituh-l"/>`,
		"fallback": "uil:compress-lines",
	});
}

export default Component;
