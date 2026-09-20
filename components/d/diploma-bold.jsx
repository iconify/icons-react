import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x3k67qbqr.css';
import '../../css/z/zymdcz7lw.css';
import '../../css/f/fl1ygo06s.css';
import '../../css/w/wysjoybzz.css';
import '../../css/y/ybhzzmbub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x3k67qbqr"/><path class="zymdcz7lw"/><path class="fl1ygo06s"/><path class="wysjoybzz"/><path class="ybhzzmbub"/></g>`,
		"fallback": "solar:diploma-bold",
	});
}

export default Component;
