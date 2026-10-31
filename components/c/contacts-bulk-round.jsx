import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zp8yaz5ji.css';
import '../../css/c/ca-ggxbuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zp8yaz5ji"/><path class="ca-ggxbuz"/></g>`,
		"fallback": "coolicons:contacts-bulk-round",
	});
}

export default Component;
