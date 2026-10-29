import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uch8o2bil.css';
import '../../css/k/k8zyftb7o.css';
import '../../css/w/w74syu_wh.css';
import '../../css/j/j5drt-bbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="uch8o2bil wm-k"/><path class="k8zyftb7o wm-k"/><path class="w74syu_wh wm-a"/><path class="j5drt-bbv wm-a"/></g>`,
		"fallback": "withicons:building-2-sketch",
	});
}

export default Component;
