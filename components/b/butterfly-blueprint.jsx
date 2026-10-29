import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/gxg59svjo.css';
import '../../css/b/b5d9gkptz.css';
import '../../css/r/r1kpz-btk.css';
import '../../css/w/wqky-ncod.css';
import '../../css/r/r87huipyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="gxg59svjo wm-deco"/><path class="b5d9gkptz wm-deco"/><path class="r1kpz-btk wm-deco"/><path class="wqky-ncod"/><path class="r87huipyk"/></g>`,
		"fallback": "withicons:butterfly-blueprint",
	});
}

export default Component;
