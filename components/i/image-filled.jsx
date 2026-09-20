import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ktj8t2bbs.css';
import '../../css/h/h0ap-mbtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ktj8t2bbs"/><path clip-rule="evenodd" class="h0ap-mbtc"/></g>`,
		"fallback": "reicon:image-filled",
	});
}

export default Component;
