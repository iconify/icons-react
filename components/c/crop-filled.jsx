import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rn6u9zb4c.css';
import '../../css/v/v2kjj4bmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rn6u9zb4c"/><path class="v2kjj4bmb"/></g>`,
		"fallback": "reicon:crop-filled",
	});
}

export default Component;
