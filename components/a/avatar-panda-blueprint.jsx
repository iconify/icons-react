import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hfxp-xbqg.css';
import '../../css/c/csigaqbdp.css';
import '../../css/q/q4jvabcts.css';
import '../../css/w/woi9uacmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="hfxp-xbqg wm-deco"/><path class="csigaqbdp wm-deco"/><path class="q4jvabcts wm-k"/><path class="wm-a woi9uacmg"/></g>`,
		"fallback": "withicons:avatar-panda-blueprint",
	});
}

export default Component;
