import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ij883nb6j.css';
import '../../css/m/mebepjbpv.css';
import '../../css/l/lld-bqbtb.css';
import '../../css/u/u90b6tbsy.css';
import '../../css/r/r1zeu3bzj.css';
import '../../css/p/pzvibbb2k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ij883nb6j"/><path class="mebepjbpv"/><path class="lld-bqbtb"/><path class="u90b6tbsy"/><path class="r1zeu3bzj"/><path class="pzvibbb2k"/></g>`,
		"fallback": "glyphs:globe-asia-duo",
	});
}

export default Component;
