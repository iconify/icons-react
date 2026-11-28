import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zycv9ym7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zycv9ym7m"/>`,
		"fallback": "noviair:calendar-star",
	});
}

export default Component;
