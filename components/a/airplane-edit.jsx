import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/peoz5pb9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="peoz5pb9v"/>`,
		"fallback": "mdi:airplane-edit",
	});
}

export default Component;
