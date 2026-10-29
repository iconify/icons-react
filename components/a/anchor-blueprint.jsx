import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/h13l7ibtj.css';
import '../../css/z/z2mj_3biz.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/f/f7xq8kbgv.css';
import '../../css/h/hhaw43mfz.css';
import '../../css/j/jmpq_6bsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="h13l7ibtj wm-deco"/><path class="wm-deco z2mj_3biz"/><path class="cf3uzcrzx wm-deco"/><path class="f7xq8kbgv wm-k"/><path class="hhaw43mfz wm-a"/><path class="jmpq_6bsp wm-k"/></g>`,
		"fallback": "withicons:anchor-blueprint",
	});
}

export default Component;
