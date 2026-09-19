import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx_s6bg8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx_s6bg8c"/>`,
		"fallback": "cbi:bbc-world-service",
	});
}

export default Component;
