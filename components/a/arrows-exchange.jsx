import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mh6shxbiv.css';
import '../../css/j/je5fosb6a.css';
import '../../css/b/bx2vp8bax.css';
import '../../css/h/h0o4n2hyd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mh6shxbiv"/><path class="je5fosb6a"/><path class="bx2vp8bax"/><path class="h0o4n2hyd"/></g>`,
		"fallback": "glyphs-poly:arrows-exchange",
	});
}

export default Component;
