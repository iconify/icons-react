import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j24607bdh.css';
import '../../css/r/rlyyweqqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j24607bdh"/><path class="rlyyweqqb"/></g>`,
		"fallback": "reicon:dumbbells-duotone",
	});
}

export default Component;
