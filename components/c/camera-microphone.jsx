import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/heu0y3bkc.css';
import '../../css/w/wz-xrm3xs.css';
import '../../css/i/irsptrbee.css';
import '../../css/p/pexj3bb4o.css';
import '../../css/s/s4qot8u4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="heu0y3bkc"/><path class="wz-xrm3xs"/><path class="irsptrbee"/><path class="pexj3bb4o"/><path class="s4qot8u4o"/></g>`,
		"fallback": "andrsrxn:camera-microphone",
	});
}

export default Component;
