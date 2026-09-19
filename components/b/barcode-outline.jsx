import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kv-q7zb1z.css';
import '../../css/l/l_mxcqb6a.css';
import '../../css/q/qnkm3hpka.css';
import '../../css/a/a9a8a3b1z.css';
import '../../css/p/pdlzyf8aw.css';
import '../../css/h/hg8tqkb-s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kv-q7zb1z"/><path class="l_mxcqb6a"/><path clip-rule="evenodd" class="qnkm3hpka"/><path clip-rule="evenodd" class="a9a8a3b1z"/><path class="pdlzyf8aw"/><path clip-rule="evenodd" class="hg8tqkb-s"/></g>`,
		"fallback": "glyphs:barcode-outline",
	});
}

export default Component;
