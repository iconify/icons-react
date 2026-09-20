import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h0dkdmj0v.css';
import '../../css/x/xbp0mdb3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h0dkdmj0v"/><path class="xbp0mdb3e"/></g>`,
		"fallback": "pixelarticons:corner-up-left-sharp",
	});
}

export default Component;
