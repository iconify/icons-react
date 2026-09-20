import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/armomp16r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="armomp16r"/>`,
		"fallback": "mdi:hot-tub",
	});
}

export default Component;
