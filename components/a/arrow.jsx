import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bh_ha7b6q.css';
import '../../css/x/x6x4dq3vw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bh_ha7b6q"/><path class="x6x4dq3vw"/></g>`,
		"fallback": "glyphs-poly:arrow",
	});
}

export default Component;
