import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gfo4ii68r.css';
import '../../css/k/kz33gz-5k.css';
import '../../css/r/rvrsyjbfe.css';
import '../../css/p/px0_hhbsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gfo4ii68r"/><path class="kz33gz-5k"/><path class="rvrsyjbfe"/><path class="px0_hhbsm"/></g>`,
		"fallback": "streamline-ultimate:analytics-bars-3-d",
	});
}

export default Component;
