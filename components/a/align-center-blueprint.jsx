import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/ybfqy0wjb.css';
import '../../css/m/mhdr543mh.css';
import '../../css/b/bkja6hbdm.css';
import '../../css/a/abddbewdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco ybfqy0wjb"/><path class="mhdr543mh wm-deco"/><path class="bkja6hbdm"/><path class="abddbewdp"/></g>`,
		"fallback": "withicons:align-center-blueprint",
	});
}

export default Component;
