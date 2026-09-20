import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dmu5_acrl.css';
import '../../css/b/bv235buvs.css';
import '../../css/s/sj71gtfbi.css';
import '../../css/p/p7wxuhchf.css';
import '../../css/s/sn3zwkbyo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dmu5_acrl"/><path clip-rule="evenodd" class="bv235buvs"/><path class="sj71gtfbi"/><path class="p7wxuhchf"/><path class="sn3zwkbyo"/></g>`,
		"fallback": "streamline-color:camera-square",
	});
}

export default Component;
