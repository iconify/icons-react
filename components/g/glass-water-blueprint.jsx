import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wip-y485t.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/h/hzwzm3bji.css';
import '../../css/s/s2uhgxbuo.css';
import '../../css/r/rem2xi-az.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wip-y485t wm-deco"/><path class="sdaucgb_l wm-deco"/><path class="hzwzm3bji wm-k"/><path class="s2uhgxbuo wm-a"/><path class="rem2xi-az wm-k"/></g>`,
		"fallback": "withicons:glass-water-blueprint",
	});
}

export default Component;
