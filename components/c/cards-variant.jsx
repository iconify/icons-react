import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1h8vubxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1h8vubxb"/>`,
		"fallback": "mdi:cards-variant",
	});
}

export default Component;
