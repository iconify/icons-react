import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/motq1qyby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="motq1qyby"/>`,
		"fallback": "mdi:contain",
	});
}

export default Component;
