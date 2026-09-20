import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q0uat2jga.css';
import '../../css/y/y_s85q-yt.css';
import '../../css/x/x2m96xbwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q0uat2jga"/><path class="y_s85q-yt"/><path clip-rule="evenodd" class="x2m96xbwi"/></g>`,
		"fallback": "reicon:cart-x2",
	});
}

export default Component;
