import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh43to3cm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh43to3cm"/>`,
		"fallback": "token:aquarius",
	});
}

export default Component;
