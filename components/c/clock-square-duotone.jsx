import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/twwywab3d.css';
import '../../css/o/o2jzn8b5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="twwywab3d"/><path clip-rule="evenodd" class="o2jzn8b5l"/></g>`,
		"fallback": "reicon:clock-square-duotone",
	});
}

export default Component;
