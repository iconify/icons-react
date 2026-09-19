import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o5mqf-brr.css';
import '../../css/b/bb2k93bxr.css';
import '../../css/e/ey2r4hb-j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o5mqf-brr"/><path class="bb2k93bxr"/><path class="ey2r4hb-j"/></g>`,
		"fallback": "glyphs:bezier-triangle-duo",
	});
}

export default Component;
