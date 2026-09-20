import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cioctv_tb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cioctv_tb"/>`,
		"fallback": "mdi:houzz-box",
	});
}

export default Component;
