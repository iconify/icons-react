import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m70158i_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m70158i_m"/>`,
		"fallback": "ri:brush-3-fill",
	});
}

export default Component;
