import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj79lzb1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj79lzb1k"/>`,
		"fallback": "mdi:curling",
	});
}

export default Component;
