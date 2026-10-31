import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b6r8s83uk.css';
import '../../css/i/ip3djampq.css';
import '../../css/m/mfln4e7ln.css';
import '../../css/i/i2n07rbtj.css';
import '../../css/e/e53lqcbjw.css';
import '../../css/m/mdy16kf5m.css';
import '../../css/k/kk4y4bb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b6r8s83uk wm-k"/><path class="ip3djampq wm-k"/><path class="mfln4e7ln wm-k"/><path class="i2n07rbtj wm-shadow"/><path class="e53lqcbjw wm-shine"/><path class="mdy16kf5m wm-shine"/><path class="kk4y4bb8d wm-shine"/></g>`,
		"fallback": "withicons-valentine:id-card",
	});
}

export default Component;
