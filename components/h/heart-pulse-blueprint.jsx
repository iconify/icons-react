import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/oiy2qljci.css';
import '../../css/w/wosekoz_u.css';
import '../../css/n/nge5cfbll.css';
import '../../css/k/krslsibqq.css';
import '../../css/d/dmkbq9bjw.css';
import '../../css/p/pce7ldb7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="oiy2qljci wm-deco"/><path class="wm-deco wosekoz_u"/><path class="nge5cfbll wm-deco"/><path class="krslsibqq wm-k"/><path class="dmkbq9bjw wm-a"/><path class="pce7ldb7f wm-k"/></g>`,
		"fallback": "withicons:heart-pulse-blueprint",
	});
}

export default Component;
