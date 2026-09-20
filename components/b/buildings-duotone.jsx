import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vptdd3nvb.css';
import '../../css/r/rk6b02bek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vptdd3nvb"/><path class="rk6b02bek"/></g>`,
		"fallback": "reicon:buildings-duotone",
	});
}

export default Component;
