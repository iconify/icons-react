import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gd3bepv6n.css';
import '../../css/b/bxopbp_ep.css';
import '../../css/j/jeinx0bni.css';
import '../../css/g/g9c1bowot.css';
import '../../css/r/rau83ebpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gd3bepv6n"/><path class="bxopbp_ep wm-k"/><path class="jeinx0bni wm-a"/><path class="g9c1bowot wm-k"/><path class="rau83ebpx wm-a"/></g>`,
		"fallback": "withicons:candy-corn-sketch",
	});
}

export default Component;
