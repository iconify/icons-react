import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mk_pnxbej.css';
import '../../css/n/nhmln6bau.css';
import '../../css/x/xofm-lbrq.css';
import '../../css/l/lj2ryhrph.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mk_pnxbej"/><path class="nhmln6bau"/><path class="xofm-lbrq"/><path class="lj2ryhrph"/></g>`,
		"fallback": "glyphs:farm-outline",
	});
}

export default Component;
