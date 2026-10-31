import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ahod4jbhz.css';
import '../../css/a/aaogxinni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ahod4jbhz"/><path class="aaogxinni"/></g>`,
		"fallback": "coolicons:exit-bulk-round",
	});
}

export default Component;
