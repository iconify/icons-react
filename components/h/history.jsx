import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xwjz0gboq.css';
import '../../css/u/u9k9s16xc.css';
import '../../css/o/oky-cpd6t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xwjz0gboq"/><path class="u9k9s16xc"/><path class="oky-cpd6t"/></g>`,
		"fallback": "glyphs-poly:history",
	});
}

export default Component;
