import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/odbq3cchx.css';
import '../../css/y/yfp8ofb5b.css';
import '../../css/j/jxlxz317g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="odbq3cchx"/><path class="yfp8ofb5b"/><path class="jxlxz317g"/></g>`,
		"fallback": "solar:cloudy-moon-bold",
	});
}

export default Component;
