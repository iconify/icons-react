import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6lajsw3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6lajsw3h"/>`,
		"fallback": "ri:charging-pile-fill",
	});
}

export default Component;
