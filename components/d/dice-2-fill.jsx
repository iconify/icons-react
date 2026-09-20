import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma3s7-bhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma3s7-bhl"/>`,
		"fallback": "ri:dice-2-fill",
	});
}

export default Component;
