import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j6p9-5bly.css';
import '../../css/e/e5rokpbnq.css';
import '../../css/e/e3ea0uq2z.css';
import '../../css/d/do1qndb7e.css';
import '../../css/d/dh3_o9bti.css';
import '../../css/p/po1o78bzy.css';
import '../../css/d/dzj-pac0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j6p9-5bly"/><path class="e5rokpbnq"/><path class="e3ea0uq2z"/><path class="do1qndb7e"/><path class="dh3_o9bti"/><path class="po1o78bzy"/><path class="dzj-pac0y"/></g>`,
		"fallback": "solar:dropper-minimalistic-bold-duotone",
	});
}

export default Component;
