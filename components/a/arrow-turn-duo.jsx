import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x6a8446qa.css';
import '../../css/s/sqza6ab3d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x6a8446qa"/><path class="sqza6ab3d"/></g>`,
		"fallback": "glyphs:arrow-turn-duo",
	});
}

export default Component;
