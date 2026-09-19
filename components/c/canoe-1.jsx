import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gci1exbgs.css';
import '../../css/c/cc9jmybaq.css';
import '../../css/n/n_7ow22tr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gci1exbgs"/><path class="cc9jmybaq"/><path class="n_7ow22tr"/></g>`,
		"fallback": "glyphs:canoe-1",
	});
}

export default Component;
