import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c-1_28b2j.css';
import '../../css/a/apfnqtb2g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c-1_28b2j"/><path class="apfnqtb2g"/></g>`,
		"fallback": "glyphs:book-spine-duo",
	});
}

export default Component;
