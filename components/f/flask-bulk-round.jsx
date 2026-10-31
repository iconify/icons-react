import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/naghcvb4j.css';
import '../../css/i/i2owb1n5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="naghcvb4j"/><path class="i2owb1n5a"/></g>`,
		"fallback": "coolicons:flask-bulk-round",
	});
}

export default Component;
