import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf3_r800o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf3_r800o"/>`,
		"fallback": "mdi:align-horizontal-left",
	});
}

export default Component;
