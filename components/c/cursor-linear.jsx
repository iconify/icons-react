import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp2vt5b0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp2vt5b0z"/>`,
		"fallback": "solar:cursor-linear",
	});
}

export default Component;
