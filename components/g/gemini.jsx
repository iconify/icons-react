import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s92pyt6_n.css';
import '../../css/h/h05r0heco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s92pyt6_n"/><path class="h05r0heco"/></g>`,
		"fallback": "reicon:gemini",
	});
}

export default Component;
