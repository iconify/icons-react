import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xpxstlblx.css';
import '../../css/a/ae-w54boi.css';
import '../../css/f/fhzl1918m.css';
import '../../css/l/lq23_x48i.css';
import '../../css/c/crfdhtb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco xpxstlblx"/><path class="ae-w54boi wm-deco"/><path class="fhzl1918m wm-k"/><path class="lq23_x48i wm-a"/><path class="crfdhtb4g wm-k"/></g>`,
		"fallback": "withicons:container-blueprint",
	});
}

export default Component;
