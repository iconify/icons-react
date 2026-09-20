import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mii_njg7o.css';
import '../../css/k/kw8ws-bfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mii_njg7o"/><path class="kw8ws-bfm"/></g>`,
		"fallback": "reicon:archive-book-filled",
	});
}

export default Component;
