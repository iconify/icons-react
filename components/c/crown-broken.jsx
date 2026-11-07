import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mwm6-xbgh.css';
import '../../css/v/vnjc76_8o.css';
import '../../css/i/i1og6obge.css';
import '../../css/m/myrt-acvb.css';
import '../../css/a/akwwjkb_a.css';
import '../../css/z/zfv0jff-m.css';
import '../../css/x/xhsqmdbch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mwm6-xbgh"/><path class="vnjc76_8o"/><path class="i1og6obge"/><path class="myrt-acvb"/><path class="akwwjkb_a"/><path class="zfv0jff-m"/><path class="xhsqmdbch"/></g>`,
		"fallback": "solar:crown-broken",
	});
}

export default Component;
