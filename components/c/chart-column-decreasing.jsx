import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyd1r-evo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyd1r-evo"/>`,
		"fallback": "mynaui:chart-column-decreasing",
	});
}

export default Component;
