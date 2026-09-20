import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ibfkhubdy.css';
import '../../css/f/fbpplkb3k.css';
import '../../css/f/fya7nszxg.css';
import '../../css/f/fj39edg9a.css';
import '../../css/k/kybbyt4wx.css';
import '../../css/f/f_hvwcoce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ibfkhubdy"/><path class="fbpplkb3k"/><path class="fya7nszxg"/><path class="fj39edg9a"/><path class="kybbyt4wx"/><path class="f_hvwcoce"/></g>`,
		"fallback": "solar:facemask-circle-bold-duotone",
	});
}

export default Component;
