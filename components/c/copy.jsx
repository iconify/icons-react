import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uw5t6o7sg.css';
import '../../css/b/bgej-bcgz.css';
import '../../css/u/u2zzmjbeo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uw5t6o7sg"/><path clip-rule="evenodd" class="bgej-bcgz"/><path class="u2zzmjbeo"/></g>`,
		"fallback": "glyphs-poly:copy",
	});
}

export default Component;
