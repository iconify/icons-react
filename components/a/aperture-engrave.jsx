import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mv8lge-yg.css';
import '../../css/p/p7h9-tb5r.css';
import '../../css/f/f6n0z_b1k.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/z/zpoereb3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mv8lge-yg wm-k"/><path class="p7h9-tb5r wm-a"/><path class="f6n0z_b1k wm-shadow"/><path class="wm-k yw4fz_b6b"/><path class="wm-a zpoereb3f"/></g>`,
		"fallback": "withicons:aperture-engrave",
	});
}

export default Component;
