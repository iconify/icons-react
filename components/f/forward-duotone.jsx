import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/daw396xyl.css';
import '../../css/w/wizvi7c0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="daw396xyl"/><path class="wizvi7c0c"/></g>`,
		"fallback": "reicon:forward-duotone",
	});
}

export default Component;
