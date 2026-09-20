import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f_4wlknxm.css';
import '../../css/p/p1n0tg9yu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="f_4wlknxm"/><path class="p1n0tg9yu"/></g>`,
		"fallback": "streamline-freehand:grid-snap-magnet",
	});
}

export default Component;
