import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slxdrq1zo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slxdrq1zo"/>`,
		"fallback": "ri:home-smile-fill",
	});
}

export default Component;
