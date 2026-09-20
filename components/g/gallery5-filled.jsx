import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ox3umqozu.css';
import '../../css/m/mhm901dql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ox3umqozu"/><path class="mhm901dql"/></g>`,
		"fallback": "reicon:gallery5-filled",
	});
}

export default Component;
