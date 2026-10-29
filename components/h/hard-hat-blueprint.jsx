import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vlejl_gcl.css';
import '../../css/w/wentjmujc.css';
import '../../css/a/ae-w54boi.css';
import '../../css/l/lsxmv7bsr.css';
import '../../css/m/mce9chbnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="vlejl_gcl wm-deco"/><path class="wentjmujc wm-deco"/><path class="ae-w54boi wm-deco"/><path class="lsxmv7bsr wm-k"/><path class="mce9chbnc wm-a"/></g>`,
		"fallback": "withicons:hard-hat-blueprint",
	});
}

export default Component;
