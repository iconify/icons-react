import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/aq69r9byh.css';
import '../../css/l/lvx6itxnk.css';
import '../../css/x/xupe0ib4r.css';
import '../../css/w/wfsha8jvf.css';
import '../../css/d/domdhwbzo.css';
import '../../css/b/b86m5ybhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="aq69r9byh wm-deco"/><path class="lvx6itxnk wm-deco"/><path class="wm-deco xupe0ib4r"/><path class="wfsha8jvf wm-k"/><path class="domdhwbzo wm-a"/><path class="b86m5ybhz wm-k"/></g>`,
		"fallback": "withicons:carrot-blueprint",
	});
}

export default Component;
