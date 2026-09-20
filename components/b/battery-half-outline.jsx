import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/swy3tebjf.css';
import '../../css/e/e5m4qbbih.css';
import '../../css/b/bku0ur4-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="swy3tebjf"/><path class="e5m4qbbih"/><path clip-rule="evenodd" class="bku0ur4-i"/></g>`,
		"fallback": "solar:battery-half-outline",
	});
}

export default Component;
