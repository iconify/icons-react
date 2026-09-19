import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jp5b4aboy.css';
import '../../css/h/hma95zbhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jp5b4aboy"/><path clip-rule="evenodd" class="hma95zbhk"/></g>`,
		"fallback": "gg:display-fullwidth",
	});
}

export default Component;
