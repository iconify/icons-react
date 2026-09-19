import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbrq33b1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbrq33b1x"/>`,
		"fallback": "circum:grid-3-1",
	});
}

export default Component;
