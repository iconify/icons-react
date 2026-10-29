import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/ksm-3clzv.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/h/h-u5cozqr.css';
import '../../css/x/xpwipybon.css';
import '../../css/f/fxix_iiqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ksm-3clzv wm-deco"/><path class="sdaucgb_l wm-deco"/><path class="h-u5cozqr wm-k"/><path class="wm-a xpwipybon"/><path class="fxix_iiqi wm-k"/></g>`,
		"fallback": "withicons:file-lock-blueprint",
	});
}

export default Component;
