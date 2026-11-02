import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pygc13kpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pygc13kpd"/>`,
		"fallback": "mingcute:disc-album-fill",
	});
}

export default Component;
