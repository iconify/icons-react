import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ewxr_5mgv.css';
import '../../css/v/v7k1qo54j.css';
import '../../css/d/dgb86uv6c.css';
import '../../css/o/o8rtmh1bo.css';
import '../../css/h/h972qfbbt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ewxr_5mgv"/><path clip-rule="evenodd" class="v7k1qo54j"/><path clip-rule="evenodd" class="dgb86uv6c"/><path class="o8rtmh1bo"/><path class="h972qfbbt"/></g>`,
		"fallback": "pepicons:can-print",
	});
}

export default Component;
