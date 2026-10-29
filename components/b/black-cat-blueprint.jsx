import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/iy4tz5bpr.css';
import '../../css/k/k_77gmb9u.css';
import '../../css/l/l6x225bcg.css';
import '../../css/s/scgb-sjtz.css';
import '../../css/z/znjji2z4m.css';
import '../../css/y/ywp1uo-iw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="iy4tz5bpr wm-deco"/><path class="k_77gmb9u wm-deco"/><path class="l6x225bcg wm-deco"/><path class="scgb-sjtz wm-k"/><path class="wm-a znjji2z4m"/><path class="wm-a ywp1uo-iw"/></g>`,
		"fallback": "withicons:black-cat-blueprint",
	});
}

export default Component;
