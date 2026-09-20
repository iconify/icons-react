import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/po5m23bou.css';
import '../../css/g/gu7_kybif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="po5m23bou"/><path class="gu7_kybif"/></g>`,
		"fallback": "mynaui:battery-charging-solid",
	});
}

export default Component;
