import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of__6dbaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of__6dbaa"/>`,
		"fallback": "noviair:calendar-play",
	});
}

export default Component;
