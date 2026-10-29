import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/ktebufbtx.css';
import '../../css/x/xurpiib7h.css';
import '../../css/p/pyzu0_z2g.css';
import '../../css/q/qwreyvbvf.css';
import '../../css/o/oy7i-acht.css';
import '../../css/y/yosku9bbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ktebufbtx wm-deco"/><path class="wm-deco xurpiib7h"/><path class="pyzu0_z2g wm-k"/><path class="qwreyvbvf wm-a"/><path class="oy7i-acht wm-s"/><path class="wm-k yosku9bbj"/></g>`,
		"fallback": "withicons:camera-off-blueprint",
	});
}

export default Component;
