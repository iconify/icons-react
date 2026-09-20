import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q0uat2jga.css';
import '../../css/z/zfid1lbih.css';
import '../../css/x/x2m96xbwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q0uat2jga"/><path class="zfid1lbih"/><path clip-rule="evenodd" class="x2m96xbwi"/></g>`,
		"fallback": "reicon:cart-add2",
	});
}

export default Component;
