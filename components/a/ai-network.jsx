import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dvfl3fbbc.css';
import '../../css/q/q7oonn27c.css';
import '../../css/d/d02nshtjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dvfl3fbbc"/><path class="q7oonn27c"/><path class="d02nshtjo"/></g>`,
		"fallback": "hugeicons:ai-network",
	});
}

export default Component;
