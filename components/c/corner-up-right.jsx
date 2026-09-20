import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uln5-cbzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uln5-cbzc"/>`,
		"fallback": "mynaui:corner-up-right",
	});
}

export default Component;
