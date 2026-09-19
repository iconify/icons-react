import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vlx_mbcyg.css';
import '../../css/h/h103ytq6b.css';
import '../../css/b/bvmd-ab7l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vlx_mbcyg"/><path class="h103ytq6b"/><path class="bvmd-ab7l"/></g>`,
		"fallback": "glyphs:credit-card-duo",
	});
}

export default Component;
