import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p2vd3xbgk.css';
import '../../css/t/tiqb603qs.css';
import '../../css/w/wrgkn9b6i.css';
import '../../css/l/l2tlt6_ly.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p2vd3xbgk"/><path class="tiqb603qs"/><path class="wrgkn9b6i"/><path class="l2tlt6_ly"/></g>`,
		"fallback": "pepicons-pencil:cloud-up",
	});
}

export default Component;
