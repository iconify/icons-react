import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/loew1n14x.css';
import '../../css/a/aoz44rb-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="loew1n14x"/><path class="aoz44rb-w"/></g>`,
		"fallback": "reicon:forward-5-seconds-filled",
	});
}

export default Component;
