import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhct0z40r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhct0z40r"/>`,
		"fallback": "mdi:hand-back-left-off",
	});
}

export default Component;
