import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/qxaxoxiqd.css';
import '../../css/u/u11n-lw5u.css';
import '../../css/s/sfs7wut0t.css';
import '../../css/x/xg2w27lak.css';
import '../../css/y/yt678qbsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="qxaxoxiqd wm-deco"/><path class="u11n-lw5u wm-deco"/><path class="sfs7wut0t wm-k"/><path class="wm-a xg2w27lak"/><path class="wm-k yt678qbsq"/></g>`,
		"fallback": "withicons:case-sensitive-blueprint",
	});
}

export default Component;
