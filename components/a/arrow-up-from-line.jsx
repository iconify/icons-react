import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/h/hi1hsabgh.css';
import '../../css/c/cxw-d9bpg.css';
import '../../css/d/ds22gxc7v.css';
import '../../css/w/wxx9azbru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGLOHoPekz" x1="4.6" x2="19.4" y1="2.6" y2="16.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient><linearGradient id="SVGvkgTLcsQ" x1="3.9" x2="20.1" y1="19.4" y2="21.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path class="hi1hsabgh wm-a"/><path fill="url(#SVGLOHoPekz)" class="cxw-d9bpg wm-a"/><path class="ds22gxc7v wm-k"/><path fill="url(#SVGvkgTLcsQ)" class="wm-k wxx9azbru"/></g>`,
		"fallback": "withicons-suite:arrow-up-from-line",
	});
}

export default Component;
