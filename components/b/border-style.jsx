import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bylx0lb3f.css';
import '../../css/w/wun88c--r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bylx0lb3f"/><path class="wun88c--r"/></g>`,
		"fallback": "glyphs-poly:border-style",
	});
}

export default Component;
