import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/os1b52jwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="os1b52jwz"/>`,
		"fallback": "circum:desktop-mouse-1",
	});
}

export default Component;
