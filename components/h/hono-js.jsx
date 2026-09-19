import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjg40r0in.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjg40r0in"/>`,
		"fallback": "bxl:hono-js",
	});
}

export default Component;
