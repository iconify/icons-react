import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctm2pnp-v.css';
import '../../css/p/p74o-abky.css';
import '../../css/o/o-o_j-mgr.css';
import '../../css/u/u44_1dbap.css';
import '../../css/y/yx2pxubfz.css';
import '../../css/o/oggaayjxd.css';
import '../../css/k/k67y7pbaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctm2pnp-v wm-shadow"/><path class="p74o-abky wm-k"/><path class="o-o_j-mgr wm-k"/><path class="u44_1dbap wm-k"/><path class="wm-k yx2pxubfz"/><path class="oggaayjxd wm-k"/><path class="k67y7pbaq wm-shine"/>`,
		"fallback": "withicons-pastel:corner-up-left",
	});
}

export default Component;
