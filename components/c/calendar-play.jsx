import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwp0bm6lf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwp0bm6lf"/>`,
		"fallback": "noviair-light:calendar-play",
	});
}

export default Component;
