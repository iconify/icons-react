import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r39aklkqn.css';
import '../../css/j/jmt4czbii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r39aklkqn"/><path class="jmt4czbii"/></g>`,
		"fallback": "coolicons:copy-alt-1-bulk-round",
	});
}

export default Component;
