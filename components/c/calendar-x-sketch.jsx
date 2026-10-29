import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nexzb87ke.css';
import '../../css/k/kfmyfx_2h.css';
import '../../css/j/jtyrkbc4a.css';
import '../../css/y/ymnh2gbiy.css';
import '../../css/p/px8c1ob3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nexzb87ke"/><path class="kfmyfx_2h wm-k"/><path class="jtyrkbc4a wm-a"/><path class="wm-k ymnh2gbiy"/><path class="px8c1ob3x wm-a"/></g>`,
		"fallback": "withicons:calendar-x-sketch",
	});
}

export default Component;
