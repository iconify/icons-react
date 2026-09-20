import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qch9_uvyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qch9_uvyp"/>`,
		"fallback": "ri:24-hours-fill",
	});
}

export default Component;
