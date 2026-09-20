import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sw1u15auk.css';
import '../../css/y/yci9rb1mt.css';
import '../../css/n/n5-k2h8fg.css';
import '../../css/p/pzr5cxfbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sw1u15auk"/><path class="yci9rb1mt"/><path clip-rule="evenodd" class="n5-k2h8fg"/><path class="pzr5cxfbm"/></g>`,
		"fallback": "reicon:earbuds-filled",
	});
}

export default Component;
