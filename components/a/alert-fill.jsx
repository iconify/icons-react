import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rx4zlylhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rx4zlylhf"/>`,
		"fallback": "ri:alert-fill",
	});
}

export default Component;
