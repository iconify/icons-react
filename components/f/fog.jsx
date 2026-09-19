import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/my_15_b2j.css';
import '../../css/b/bdimdovgw.css';
import '../../css/l/lgl2rxbth.css';
import '../../css/y/yazlzye9u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="my_15_b2j"/><path class="bdimdovgw"/><path class="lgl2rxbth"/><path class="yazlzye9u"/></g>`,
		"fallback": "glyphs-poly:fog",
	});
}

export default Component;
