import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ucdwg4qnp.css';
import '../../css/r/rt0ba0b9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ucdwg4qnp"/><path class="rt0ba0b9t"/></g>`,
		"fallback": "healthicons:coughing-24px",
	});
}

export default Component;
