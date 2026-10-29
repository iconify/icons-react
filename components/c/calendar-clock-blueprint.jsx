import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zt0ehncja.css';
import '../../css/g/gl5uk-95j.css';
import '../../css/x/xupe0ib4r.css';
import '../../css/z/z2fq9cbxy.css';
import '../../css/y/ykqnlnbbe.css';
import '../../css/g/geoiylb7a.css';
import '../../css/e/eix6_h28i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco zt0ehncja"/><path class="gl5uk-95j wm-deco"/><path class="wm-deco xupe0ib4r"/><path class="wm-k z2fq9cbxy"/><path class="wm-a ykqnlnbbe"/><path class="geoiylb7a wm-s"/><path class="eix6_h28i wm-k"/></g>`,
		"fallback": "withicons:calendar-clock-blueprint",
	});
}

export default Component;
