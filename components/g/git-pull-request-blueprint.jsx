import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/nwo8vjbtt.css';
import '../../css/x/xsyo0x1fz.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/k/kgiyicvgm.css';
import '../../css/n/nvtflh6wc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="nwo8vjbtt wm-deco"/><path class="wm-deco xsyo0x1fz"/><path class="vze4wuf6n wm-deco"/><path class="kgiyicvgm wm-k"/><path class="nvtflh6wc wm-k"/></g>`,
		"fallback": "withicons:git-pull-request-blueprint",
	});
}

export default Component;
