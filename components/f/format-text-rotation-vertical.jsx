import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgnf151la.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgnf151la"/>`,
		"fallback": "mdi:format-text-rotation-vertical",
	});
}

export default Component;
