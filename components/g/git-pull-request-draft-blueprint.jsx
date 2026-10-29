import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xs98siuyd.css';
import '../../css/v/vsjtogmkk.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/k/kgiyicvgm.css';
import '../../css/y/ypxqvw3_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco xs98siuyd"/><path class="vsjtogmkk wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="kgiyicvgm wm-k"/><path class="wm-a ypxqvw3_y"/></g>`,
		"fallback": "withicons:git-pull-request-draft-blueprint",
	});
}

export default Component;
