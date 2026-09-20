import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/glnutnbjt.css';
import '../../css/q/qqenjyebd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="glnutnbjt"/><path class="qqenjyebd"/></g>`,
		"fallback": "reicon:armchair-filled",
	});
}

export default Component;
