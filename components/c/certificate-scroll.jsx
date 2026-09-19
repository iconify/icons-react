import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ygfnanrxm.css';
import '../../css/v/v94p4ebmm.css';
import '../../css/u/ucoipt0um.css';
import '../../css/h/hb6tmrgyf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ygfnanrxm"/><path class="v94p4ebmm"/><path clip-rule="evenodd" class="ucoipt0um"/><path clip-rule="evenodd" class="hb6tmrgyf"/></g>`,
		"fallback": "glyphs-poly:certificate-scroll",
	});
}

export default Component;
