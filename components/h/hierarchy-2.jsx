import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/w/wglv4rb8q.css';
import '../../css/j/jdiji6lin.css';
import '../../css/u/urzpmveho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="wglv4rb8q"/><path class="jdiji6lin"/><path class="urzpmveho"/></g>`,
		"fallback": "streamline-sharp-color:hierarchy-2",
	});
}

export default Component;
