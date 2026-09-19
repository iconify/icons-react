import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u_5upgzwv.css';
import '../../css/g/gxu0jib1w.css';
import '../../css/b/by412bl9y.css';
import '../../css/a/acdx52uev.css';
import '../../css/d/d0e1ubbqo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u_5upgzwv"/><path class="gxu0jib1w"/><path clip-rule="evenodd" class="by412bl9y"/><path class="acdx52uev"/><path class="d0e1ubbqo"/></g>`,
		"fallback": "glyphs:binoculars-1-duo",
	});
}

export default Component;
