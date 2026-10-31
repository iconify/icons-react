import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uftxwgk8k.css';
import '../../css/u/uge61nb_g.css';
import '../../css/d/dcj5z9bdp.css';
import '../../css/v/vnsptrbkq.css';
import '../../css/u/ux37enbkr.css';
import '../../css/b/b67_bfbks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uftxwgk8k wm-k"/><path class="uge61nb_g wm-deco"/><path class="dcj5z9bdp wm-k"/><path class="vnsptrbkq wm-shadow"/><path class="ux37enbkr wm-shine"/><path class="b67_bfbks wm-shine"/></g>`,
		"fallback": "withicons-valentine:baby-bottle",
	});
}

export default Component;
