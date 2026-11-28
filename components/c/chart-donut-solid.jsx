import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u39vt1b1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u39vt1b1h"/>`,
		"fallback": "iconaut:chart-donut-solid",
	});
}

export default Component;
