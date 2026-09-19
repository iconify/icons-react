import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icmq1lb3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icmq1lb3t"/>`,
		"fallback": "griddy-icons:currency-lira",
	});
}

export default Component;
