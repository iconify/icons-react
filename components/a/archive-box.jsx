import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyt4rcbrw.css';
import '../../css/n/n17uj9b8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xyt4rcbrw"/><path clip-rule="evenodd" class="n17uj9b8w"/></g>`,
		"fallback": "reicon:archive-box",
	});
}

export default Component;
