import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/swr84yb6f.css';
import '../../css/h/hn5zmzb1j.css';
import '../../css/m/mk5yu_unr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="swr84yb6f"/><path class="hn5zmzb1j"/><path class="mk5yu_unr"/></g>`,
		"fallback": "glyphs:canoe-1-duo",
	});
}

export default Component;
