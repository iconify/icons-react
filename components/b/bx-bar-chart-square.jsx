import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/baahp-79z.css';
import '../../css/h/h55kfl3ha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="baahp-79z"/><path class="h55kfl3ha"/>`,
		"fallback": "bx:bx-bar-chart-square",
	});
}

export default Component;
