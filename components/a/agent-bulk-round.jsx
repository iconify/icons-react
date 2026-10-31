import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b-qluckwo.css';
import '../../css/d/d3o8jy_hq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b-qluckwo"/><path class="d3o8jy_hq"/></g>`,
		"fallback": "coolicons:agent-bulk-round",
	});
}

export default Component;
