import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zy9gfybke.css';
import '../../css/x/xt3yzabqg.css';
import '../../css/w/wne-px2-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zy9gfybke"/><path class="xt3yzabqg"/><path class="wne-px2-n"/></g>`,
		"fallback": "solar:bookmark-square-bold-duotone",
	});
}

export default Component;
