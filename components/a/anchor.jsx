import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yf6vs7ttm.css';
import '../../css/w/woyg9ybfc.css';
import '../../css/h/hul4uub1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yf6vs7ttm"/><path class="woyg9ybfc"/><path class="hul4uub1l"/></g>`,
		"fallback": "pixelarticons:anchor",
	});
}

export default Component;
