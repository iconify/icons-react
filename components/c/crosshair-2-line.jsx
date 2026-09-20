import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rln_3myxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rln_3myxt"/>`,
		"fallback": "ri:crosshair-2-line",
	});
}

export default Component;
