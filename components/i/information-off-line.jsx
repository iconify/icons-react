import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji7ws2beg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji7ws2beg"/>`,
		"fallback": "ri:information-off-line",
	});
}

export default Component;
