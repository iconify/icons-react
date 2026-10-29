import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wzo0eonru.css';
import '../../css/z/zeta229ez.css';
import '../../css/j/ji9_5zm4p.css';
import '../../css/u/ums7zcadz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wzo0eonru"/><path class="wm-a zeta229ez"/><path class="ji9_5zm4p wm-k"/><path class="ums7zcadz wm-a"/></g>`,
		"fallback": "withicons:folders-sketch",
	});
}

export default Component;
