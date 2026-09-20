import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oimfb3b8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oimfb3b8z"/>`,
		"fallback": "mdi:chocolate",
	});
}

export default Component;
