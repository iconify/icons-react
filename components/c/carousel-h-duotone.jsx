import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oqwnsbcmj.css';
import '../../css/i/iug-keb_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oqwnsbcmj"/><path class="iug-keb_q"/></g>`,
		"fallback": "reicon:carousel-h-duotone",
	});
}

export default Component;
