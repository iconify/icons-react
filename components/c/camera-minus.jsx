import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zfe-79p2q.css';
import '../../css/w/wz-xrm3xs.css';
import '../../css/i/irsptrbee.css';
import '../../css/n/n2foe1bns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zfe-79p2q"/><path class="wz-xrm3xs"/><path class="irsptrbee"/><path class="n2foe1bns"/></g>`,
		"fallback": "andrsrxn:camera-minus",
	});
}

export default Component;
