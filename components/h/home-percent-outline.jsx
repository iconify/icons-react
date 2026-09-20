import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqf82ab1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqf82ab1j"/>`,
		"fallback": "mdi:home-percent-outline",
	});
}

export default Component;
