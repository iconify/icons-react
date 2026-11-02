import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw22v-b9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw22v-b9l"/>`,
		"fallback": "mingcute:cannabis-off-line",
	});
}

export default Component;
