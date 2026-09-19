import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lzcxp6rgp.css';
import '../../css/z/zg-d3i4so.css';
import '../../css/d/d0t86vbpx.css';
import '../../css/x/xky54bc0e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lzcxp6rgp"/><path clip-rule="evenodd" class="zg-d3i4so"/><path class="d0t86vbpx"/><path clip-rule="evenodd" class="xky54bc0e"/></g>`,
		"fallback": "healthicons:electricity-outline",
	});
}

export default Component;
