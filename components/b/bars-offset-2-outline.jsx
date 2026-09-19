import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ov4a7lb9x.css';
import '../../css/r/r1l8phgqx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ov4a7lb9x"/><path class="r1l8phgqx"/></g>`,
		"fallback": "glyphs:bars-offset-2-outline",
	});
}

export default Component;
