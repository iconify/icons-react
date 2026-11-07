import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_0l8pw0z.css';
import '../../css/d/dt2d6ubkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_0l8pw0z"/><path class="dt2d6ubkc"/>`,
		"fallback": "solar:cloud-snowfall-outline",
	});
}

export default Component;
