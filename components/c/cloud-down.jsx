import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p2vd3xbgk.css';
import '../../css/j/j3gpqnbek.css';
import '../../css/m/mmdgk3bof.css';
import '../../css/l/l9bctyjux.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p2vd3xbgk"/><path class="j3gpqnbek"/><path class="mmdgk3bof"/><path class="l9bctyjux"/></g>`,
		"fallback": "pepicons-pencil:cloud-down",
	});
}

export default Component;
