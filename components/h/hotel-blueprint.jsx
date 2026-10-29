import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/p6vy9kb5f.css';
import '../../css/f/feovcib_o.css';
import '../../css/a/a461t3b8x.css';
import '../../css/i/i1uax2xgn.css';
import '../../css/u/um__jv-nw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="p6vy9kb5f wm-deco"/><path class="feovcib_o wm-deco"/><path class="a461t3b8x wm-k"/><path class="i1uax2xgn wm-s"/><path class="um__jv-nw wm-a"/></g>`,
		"fallback": "withicons:hotel-blueprint",
	});
}

export default Component;
