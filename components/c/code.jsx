import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv89g3bey.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iv89g3bey"/>`,
		"fallback": "ooui:code",
	});
}

export default Component;
