import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wgqm6_buu.css';
import '../../css/x/x5s7uxbje.css';
import '../../css/d/dicn0xifw.css';
import '../../css/j/jko7jdb1p.css';
import '../../css/k/k1uq304yb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wgqm6_buu"/><circle class="x5s7uxbje"/><path class="dicn0xifw"/><path class="jko7jdb1p"/><circle transform="matrix(0 -1 -1 0 10 14)" class="k1uq304yb"/><circle transform="matrix(0 -1 -1 0 16 14)" class="k1uq304yb"/></g>`,
		"fallback": "icon-park:disabaled-web",
	});
}

export default Component;
