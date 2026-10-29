import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/yw_rco21o.css';
import '../../css/m/mhdr543mh.css';
import '../../css/a/afhkc-a9p.css';
import '../../css/d/dfk4ewnam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco yw_rco21o"/><path class="mhdr543mh wm-deco"/><path class="afhkc-a9p"/><path class="dfk4ewnam"/></g>`,
		"fallback": "withicons:align-right-blueprint",
	});
}

export default Component;
