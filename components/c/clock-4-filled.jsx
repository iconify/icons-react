import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f681u-1lk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f681u-1lk"/>`,
		"fallback": "boxicons:clock-4-filled",
	});
}

export default Component;
