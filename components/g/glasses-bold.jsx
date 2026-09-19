import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l_u4-bbiz.css';
import '../../css/k/kwa-fbt3y.css';
import '../../css/r/rvuh9b8su.css';
import '../../css/c/csf21-vrc.css';
import '../../css/i/i8__moblc.css';
import '../../css/m/mo62zpbkb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="l_u4-bbiz"/><path class="kwa-fbt3y"/><path class="rvuh9b8su"/><path clip-rule="evenodd" class="csf21-vrc"/><path class="i8__moblc"/><path class="mo62zpbkb"/></g>`,
		"fallback": "glyphs:glasses-bold",
	});
}

export default Component;
