import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s6px3dczh.css';
import '../../css/o/o_m9k28kh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="s6px3dczh"/><rect class="o_m9k28kh"/></g>`,
		"fallback": "glyphs-poly:folder",
	});
}

export default Component;
