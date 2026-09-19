import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y823xe55f.css';
import '../../css/w/wj2vs7q2e.css';
import '../../css/p/po8e2eb_g.css';

const viewBox = {"width":80,"height":81};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y823xe55f"/><path class="wj2vs7q2e"/><path class="po8e2eb_g"/></g>`,
		"fallback": "glyphs:chart-line-1-bold",
	});
}

export default Component;
