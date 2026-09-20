import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zu97pvbir.css';
import '../../css/y/yt0wvz9qu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zu97pvbir"/><path class="yt0wvz9qu"/></g>`,
		"fallback": "reicon:document2-filled",
	});
}

export default Component;
