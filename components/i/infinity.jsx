import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cklmq6b4x.css';
import '../../css/a/ayrut3bdx.css';
import '../../css/q/qlah1wb-u.css';
import '../../css/l/ly1_4jbiv.css';
import '../../css/p/pjgv8lxjb.css';
import '../../css/z/zz-ex9b-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cklmq6b4x wm-shadow"/><path class="ayrut3bdx wm-k"/><path class="qlah1wb-u wm-k"/><path class="ly1_4jbiv wm-k"/><path class="pjgv8lxjb wm-k"/><path class="wm-shine zz-ex9b-k"/></g>`,
		"fallback": "withicons-coquette:infinity",
	});
}

export default Component;
