import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na23c-lwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="na23c-lwx"/>`,
		"fallback": "mingcute:hemisphere-fill",
	});
}

export default Component;
