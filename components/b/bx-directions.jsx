import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dc1uw4bdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dc1uw4bdx"/>`,
		"fallback": "bx:bx-directions",
	});
}

export default Component;
