import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jom4w58hj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jom4w58hj"/>`,
		"fallback": "mingcute:color-filter-line",
	});
}

export default Component;
