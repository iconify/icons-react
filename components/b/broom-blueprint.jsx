import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lhnaep5ah.css';
import '../../css/k/kya_atw0f.css';
import '../../css/a/aoozyu66l.css';
import '../../css/x/xl4x9fb_h.css';
import '../../css/z/zn_5tzyza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="lhnaep5ah wm-deco"/><path class="kya_atw0f wm-deco"/><path class="aoozyu66l wm-k"/><path class="wm-a xl4x9fb_h"/><path class="wm-a zn_5tzyza"/></g>`,
		"fallback": "withicons:broom-blueprint",
	});
}

export default Component;
