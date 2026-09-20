import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jxh696bpo.css';
import '../../css/s/s8zvn4tvb.css';
import '../../css/p/p7q_-seqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jxh696bpo"/><path class="s8zvn4tvb"/><path class="p7q_-seqg"/></g>`,
		"fallback": "solar:calendar-search-bold",
	});
}

export default Component;
