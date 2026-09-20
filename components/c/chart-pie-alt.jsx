import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbtrp5bnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbtrp5bnn"/>`,
		"fallback": "uil:chart-pie-alt",
	});
}

export default Component;
