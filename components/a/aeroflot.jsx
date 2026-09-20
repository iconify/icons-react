import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llhn36wnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llhn36wnm"/>`,
		"fallback": "thesvg-color:aeroflot",
	});
}

export default Component;
