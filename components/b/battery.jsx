import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xwhj4xbwf.css';
import '../../css/p/pbc518b4s.css';
import '../../css/a/a72a8abyl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="xwhj4xbwf"/><path class="pbc518b4s"/><path clip-rule="evenodd" class="a72a8abyl"/></g>`,
		"fallback": "pepicons:battery",
	});
}

export default Component;
