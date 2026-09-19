import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cciev0bxn.css';
import '../../css/s/sgj-2603c.css';
import '../../css/b/btg-1lb1p.css';
import '../../css/t/t0ed16bea.css';
import '../../css/j/j9to8cbqw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cciev0bxn"/><path class="sgj-2603c"/><path class="btg-1lb1p"/><path class="t0ed16bea"/><path class="j9to8cbqw"/></g>`,
		"fallback": "glyphs:garage-bold",
	});
}

export default Component;
