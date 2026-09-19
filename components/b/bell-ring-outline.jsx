import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k05pohbcd.css';
import '../../css/p/p-4rrx1id.css';
import '../../css/z/z96i0eb1f.css';
import '../../css/e/elozc-x8r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k05pohbcd"/><path class="p-4rrx1id"/><path clip-rule="evenodd" class="z96i0eb1f"/><path class="elozc-x8r"/></g>`,
		"fallback": "glyphs:bell-ring-outline",
	});
}

export default Component;
