import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zfrpjvv3g.css';
import '../../css/u/ubjy5_0us.css';
import '../../css/n/n_0h7v49w.css';
import '../../css/p/prig60bwh.css';
import '../../css/e/ejqcs-hzc.css';
import '../../css/j/jg85lxr_x.css';
import '../../css/d/d8qc2w3yi.css';
import '../../css/n/n_8twn3gu.css';
import '../../css/x/xwlvxfb4e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zfrpjvv3g"/><path class="ubjy5_0us"/><rect transform="rotate(15 61.068 40.26)" class="n_0h7v49w"/><rect transform="rotate(15 42.415 53.207)" class="prig60bwh"/><rect transform="rotate(-45 7 33.627)" class="ejqcs-hzc"/><rect transform="rotate(-45 14.543 32.685)" class="jg85lxr_x"/><rect transform="rotate(-45 24.914 22.314)" class="d8qc2w3yi"/><rect transform="rotate(-45 26.799 44.94)" class="n_8twn3gu"/><rect transform="rotate(-45 37.17 34.57)" class="xwlvxfb4e"/></g>`,
		"fallback": "glyphs-poly:dice",
	});
}

export default Component;
