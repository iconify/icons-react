import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/btfyv--hm.css';
import '../../css/d/de559zl6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="btfyv--hm"/><path class="de559zl6j"/></g>`,
		"fallback": "coolicons:brain-bulk-round",
	});
}

export default Component;
