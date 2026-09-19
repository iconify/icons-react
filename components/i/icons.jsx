import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dpeakr04t.css';
import '../../css/z/zdr2so73c.css';
import '../../css/p/pi0obnw5p.css';
import '../../css/z/zf_qj8moa.css';
import '../../css/s/s0xfuz19y.css';
import '../../css/c/chzoiac_z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dpeakr04t"/><path class="zdr2so73c"/><path class="pi0obnw5p"/><path class="zf_qj8moa"/><path class="s0xfuz19y"/><path class="chzoiac_z"/></g>`,
		"fallback": "glyphs-poly:icons",
	});
}

export default Component;
