import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/z/zyhc4ob-x.css';
import '../../css/e/exrhwhtnu.css';
import '../../css/v/vi-yg5enu.css';
import '../../css/t/txlqvcbnr.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><path class="zyhc4ob-x"/><path clip-rule="evenodd" class="exrhwhtnu"/><path class="vi-yg5enu"/><path class="txlqvcbnr"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:controller-circle-filled",
	});
}

export default Component;
