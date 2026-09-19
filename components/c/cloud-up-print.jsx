import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bbxdvzjvn.css';
import '../../css/y/ypdia9bkn.css';
import '../../css/m/mxb79nbaf.css';
import '../../css/x/x5ekm4b9c.css';
import '../../css/d/dvl474wgs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bbxdvzjvn"/><path clip-rule="evenodd" class="ypdia9bkn"/><path class="mxb79nbaf"/><path class="x5ekm4b9c"/><path class="dvl474wgs"/></g>`,
		"fallback": "pepicons:cloud-up-print",
	});
}

export default Component;
