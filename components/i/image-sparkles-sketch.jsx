import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pj4w296cn.css';
import '../../css/l/l1vadobod.css';
import '../../css/v/vw6k31boc.css';
import '../../css/o/oubua5bfb.css';
import '../../css/r/r4sn81cyt.css';
import '../../css/q/qyjic00ok.css';
import '../../css/j/jftfw_bzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pj4w296cn"/><path class="l1vadobod wm-k"/><path class="vw6k31boc wm-a"/><path class="oubua5bfb wm-s"/><path class="r4sn81cyt wm-k"/><path class="qyjic00ok wm-a"/><path class="jftfw_bzx wm-s"/></g>`,
		"fallback": "withicons:image-sparkles-sketch",
	});
}

export default Component;
