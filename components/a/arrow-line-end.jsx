import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z3lzi1byl.css';
import '../../css/a/auji-xecj.css';
import '../../css/v/vupovj4do.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z3lzi1byl"/><path class="auji-xecj"/><path class="vupovj4do"/></g>`,
		"fallback": "glyphs-poly:arrow-line-end",
	});
}

export default Component;
