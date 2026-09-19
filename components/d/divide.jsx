import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l8x6qzuvy.css';
import '../../css/e/enescgqqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l8x6qzuvy"/><path class="enescgqqx"/></g>`,
		"fallback": "iconoir:divide",
	});
}

export default Component;
