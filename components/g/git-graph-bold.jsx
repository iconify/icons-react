import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cx-byxm-k.css';
import '../../css/g/gtnoc3_rf.css';
import '../../css/s/sm4k1ettw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cx-byxm-k"/><path class="gtnoc3_rf"/><path clip-rule="evenodd" class="sm4k1ettw"/></g>`,
		"fallback": "solar:git-graph-bold",
	});
}

export default Component;
