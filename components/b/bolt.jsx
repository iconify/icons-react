import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj50_i5oy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj50_i5oy"/>`,
		"fallback": "boxicons:bolt",
	});
}

export default Component;
