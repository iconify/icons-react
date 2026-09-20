import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp-0d0ifd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp-0d0ifd"/>`,
		"fallback": "mdi:gate-arrow-right",
	});
}

export default Component;
