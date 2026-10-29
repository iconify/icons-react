import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/unhy7-bno.css';
import '../../css/w/wosekoz_u.css';
import '../../css/n/nge5cfbll.css';
import '../../css/s/sv4u3ncql.css';
import '../../css/u/uh6a78blk.css';
import '../../css/p/pth9bvbqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="unhy7-bno wm-deco"/><path class="wm-deco wosekoz_u"/><path class="nge5cfbll wm-deco"/><path class="sv4u3ncql wm-k"/><path class="uh6a78blk wm-a"/><path class="pth9bvbqd wm-k"/></g>`,
		"fallback": "withicons:book-open-check-blueprint",
	});
}

export default Component;
