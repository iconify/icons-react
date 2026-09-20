import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycs9x2bve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycs9x2bve"/>`,
		"fallback": "streamline-ultimate:award-medal-4-bold",
	});
}

export default Component;
