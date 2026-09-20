import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t00v0dmce.css';
import '../../css/x/xbdajmbiu.css';
import '../../css/i/id4_8ibao.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t00v0dmce"/><path clip-rule="evenodd" class="xbdajmbiu"/><path clip-rule="evenodd" class="id4_8ibao"/></g>`,
		"fallback": "streamline-color:browser-wifi-flat",
	});
}

export default Component;
