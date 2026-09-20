import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5y088h5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5y088h5o"/>`,
		"fallback": "streamline-ultimate:concert-rock-1-bold",
	});
}

export default Component;
