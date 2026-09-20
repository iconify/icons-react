import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdh95gmej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdh95gmej"/>`,
		"fallback": "lineicons:diamonds-1",
	});
}

export default Component;
