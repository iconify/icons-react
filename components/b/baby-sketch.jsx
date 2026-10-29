import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vtzv2fo-g.css';
import '../../css/s/s2v-wta1e.css';
import '../../css/b/bs6vl3bfj.css';
import '../../css/f/f24vzrb4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vtzv2fo-g"/><path class="s2v-wta1e wm-a"/><path class="bs6vl3bfj wm-k"/><path class="f24vzrb4o wm-a"/></g>`,
		"fallback": "withicons:baby-sketch",
	});
}

export default Component;
