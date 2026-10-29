import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/nvmxc-6yx.css';
import '../../css/r/ru7g1vbuy.css';
import '../../css/p/p1dck6zta.css';
import '../../css/b/bkzzmgbiy.css';
import '../../css/h/hlm3wm6_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="nvmxc-6yx wm-deco"/><path class="ru7g1vbuy wm-deco"/><path class="p1dck6zta wm-k"/><path class="bkzzmgbiy wm-a"/><path class="hlm3wm6_m wm-k"/></g>`,
		"fallback": "withicons:dholak-blueprint",
	});
}

export default Component;
