import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uxk221bvn.css';
import '../../css/n/nwg_owbkv.css';
import '../../css/q/qhej172gu.css';
import '../../css/y/yv_w3obcz.css';
import '../../css/k/kf7wn1ygz.css';
import '../../css/a/akcwkxb7x.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uxk221bvn"/><path class="nwg_owbkv"/><path clip-rule="evenodd" class="qhej172gu"/><path clip-rule="evenodd" class="yv_w3obcz"/><path class="kf7wn1ygz"/><path clip-rule="evenodd" class="akcwkxb7x"/></g>`,
		"fallback": "glyphs:alarm-minus-outline",
	});
}

export default Component;
