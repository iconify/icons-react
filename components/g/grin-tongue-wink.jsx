import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/am770-rkn.css';
import '../../css/l/lgw_d-ckw.css';
import '../../css/m/mqbshibpa.css';
import '../../css/h/hyc9jcbmb.css';
import '../../css/d/ducbzu09b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="am770-rkn"/><path clip-rule="evenodd" class="lgw_d-ckw"/><path class="mqbshibpa"/><circle class="hyc9jcbmb"/><path class="ducbzu09b"/></g>`,
		"fallback": "glyphs-poly:grin-tongue-wink",
	});
}

export default Component;
