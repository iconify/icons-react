import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rq4j_kx8n.css';
import '../../css/b/b_a3owbss.css';
import '../../css/i/iv0rg2bis.css';
import '../../css/h/hhu4l2b2q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rq4j_kx8n"/><path class="b_a3owbss"/><path class="iv0rg2bis"/><path class="hhu4l2b2q"/></g>`,
		"fallback": "glyphs:folder-open-1-duo",
	});
}

export default Component;
