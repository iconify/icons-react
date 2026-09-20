import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/twwywab3d.css';
import '../../css/y/yb6sm-ooh.css';
import '../../css/y/yuarjw60h.css';
import '../../css/r/r4a6gmadf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="twwywab3d"/><path class="yb6sm-ooh"/><path clip-rule="evenodd" class="yuarjw60h"/><path class="r4a6gmadf"/></g>`,
		"fallback": "reicon:cardholder-duotone",
	});
}

export default Component;
