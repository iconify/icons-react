import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vnoyypb9d.css';
import '../../css/o/oaaggab4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vnoyypb9d"/><path clip-rule="evenodd" class="oaaggab4n"/></g>`,
		"fallback": "reicon:boombox-filled",
	});
}

export default Component;
