import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/s2fzgqp6w.css';
import '../../css/v/vke7uysby.css';
import '../../css/o/oorih5bvf.css';
import '../../css/x/xt8yg9bhd.css';
import '../../css/y/yw1d64mhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="s2fzgqp6w wm-deco"/><path class="vke7uysby wm-deco"/><path class="oorih5bvf wm-deco"/><path class="wm-k xt8yg9bhd"/><path class="wm-a yw1d64mhq"/></g>`,
		"fallback": "withicons:bat-blueprint",
	});
}

export default Component;
