import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aw9ln9brz.css';
import '../../css/g/gmg2hcb-r.css';
import '../../css/x/x5-ac1bzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aw9ln9brz"/><path class="gmg2hcb-r"/><path clip-rule="evenodd" class="x5-ac1bzt"/></g>`,
		"fallback": "solar:donut-bold",
	});
}

export default Component;
