import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mzd118pxz.css';
import '../../css/h/hcn_edccn.css';
import '../../css/x/xnodzworh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="mzd118pxz wm-k"/><path class="hcn_edccn wm-a"/><path class="wm-s xnodzworh"/></g>`,
		"fallback": "withicons:alarm-clock-off-gloss",
	});
}

export default Component;
