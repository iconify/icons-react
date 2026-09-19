import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eyxu395xx.css';
import '../../css/a/agv8d4bkd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eyxu395xx"/><path class="agv8d4bkd"/></g>`,
		"fallback": "fluent-emoji-high-contrast:ice",
	});
}

export default Component;
