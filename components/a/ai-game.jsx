import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f5r_9-b1t.css';
import '../../css/p/p4a20b46n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f5r_9-b1t"/><path class="p4a20b46n"/></g>`,
		"fallback": "hugeicons:ai-game",
	});
}

export default Component;
