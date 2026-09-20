import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wp0y10blc.css';
import '../../css/d/d-ro7ccyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wp0y10blc"/><path class="d-ro7ccyr"/></g>`,
		"fallback": "reicon:checklist-duotone",
	});
}

export default Component;
