import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/h/hxm9qcc_e.css';
import '../../css/h/hw0tsgbck.css';
import '../../css/i/iarbwm4it.css';
import '../../css/n/ngj96acjh.css';
import '../../css/f/fmxtltbgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="hxm9qcc_e"/><path class="hw0tsgbck wm-shine"/><path class="iarbwm4it wm-k"/><path class="ngj96acjh wm-a"/><path class="fmxtltbgh wm-deco"/></g>`,
		"fallback": "withicons-kawaii:factory",
	});
}

export default Component;
