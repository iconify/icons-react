import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/y4u_k6bek.css';
import '../../css/r/rwmee1boq.css';
import '../../css/u/uvg02h9rx.css';
import '../../css/j/jjivkrbpv.css';
import '../../css/x/xx-krhqrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco y4u_k6bek"/><path class="rwmee1boq wm-deco"/><path class="uvg02h9rx wm-deco"/><path class="jjivkrbpv wm-k"/><path class="wm-a xx-krhqrw"/></g>`,
		"fallback": "withicons:cricket-blueprint",
	});
}

export default Component;
