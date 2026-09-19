import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j9a24jb7k.css';
import '../../css/b/bbmrh8boy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j9a24jb7k"/><path class="bbmrh8boy"/></g>`,
		"fallback": "glyphs:flag-duo",
	});
}

export default Component;
