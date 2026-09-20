import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj2hj6ivg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yj2hj6ivg"/>`,
		"fallback": "mdi:car-clock",
	});
}

export default Component;
