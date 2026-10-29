import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fok4y7jnx.css';
import '../../css/w/wo88mccpe.css';
import '../../css/h/h4o1pabcz.css';
import '../../css/m/mfk7hzexs.css';
import '../../css/h/h8uym7u6q.css';
import '../../css/e/et9ilr5ic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="fok4y7jnx wm-deco"/><path class="wm-deco wo88mccpe"/><path class="h4o1pabcz wm-deco"/><path class="mfk7hzexs wm-k"/><path class="h8uym7u6q wm-a"/><path class="et9ilr5ic wm-k"/></g>`,
		"fallback": "withicons:golf-blueprint",
	});
}

export default Component;
