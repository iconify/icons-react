import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfzk96b0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfzk96b0q"/>`,
		"fallback": "noviair-light:calendar-search",
	});
}

export default Component;
