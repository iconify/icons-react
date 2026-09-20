import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2nv2zb-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2nv2zb-f"/>`,
		"fallback": "mdi:battle-net",
	});
}

export default Component;
