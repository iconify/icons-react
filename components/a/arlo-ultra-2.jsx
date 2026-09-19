import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oahs73b7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oahs73b7j"/>`,
		"fallback": "cbi:arlo-ultra-2",
	});
}

export default Component;
