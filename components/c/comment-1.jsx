import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j0uu7sblb.css';
import '../../css/j/jx9zyu03l.css';
import '../../css/o/o4ej_lc-u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j0uu7sblb"/><path class="jx9zyu03l"/><circle class="o4ej_lc-u"/></g>`,
		"fallback": "glyphs-poly:comment-1",
	});
}

export default Component;
