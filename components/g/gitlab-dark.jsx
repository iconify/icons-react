import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/b/bgkvdxtwv.css';
import '../../css/a/akt6vzbbw.css';
import '../../css/k/ks7j75u6a.css';
import '../../css/e/e39f-yb8v.css';
import '../../css/n/n1igb436x.css';
import '../../css/t/tzkr37bot.css';
import '../../css/v/vjuf_fb9y.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="bgkvdxtwv"/><path class="akt6vzbbw"/><path class="ks7j75u6a"/><path class="e39f-yb8v"/><path class="n1igb436x"/><path class="tzkr37bot"/><path class="vjuf_fb9y"/></g>`,
		"fallback": "skill-icons:gitlab-dark",
	});
}

export default Component;
