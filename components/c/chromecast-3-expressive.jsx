import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cp2yo5b1z.css';
import '../../css/b/b-gxn3boc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cp2yo5b1z"/><path class="b-gxn3boc"/></g>`,
		"fallback": "nrk:chromecast-3-expressive",
	});
}

export default Component;
