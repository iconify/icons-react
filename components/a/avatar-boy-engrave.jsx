import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/spzl3f68r.css';
import '../../css/i/i0o3y5bln.css';
import '../../css/j/jfsu2ygwb.css';
import '../../css/b/bd9iuybie.css';
import '../../css/f/faaiuubbc.css';
import '../../css/r/ryfqb9b2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="spzl3f68r wm-k"/><path class="i0o3y5bln wm-a"/><path class="jfsu2ygwb wm-shadow"/><path class="bd9iuybie wm-k"/><path class="faaiuubbc wm-k"/><path class="ryfqb9b2g wm-a"/></g>`,
		"fallback": "withicons:avatar-boy-engrave",
	});
}

export default Component;
