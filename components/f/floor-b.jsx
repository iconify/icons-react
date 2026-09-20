import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo1krib8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo1krib8z"/>`,
		"fallback": "mdi:floor-b",
	});
}

export default Component;
