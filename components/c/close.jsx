import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gj7_px5qu.css';
import '../../css/b/bmap2-b_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="gj7_px5qu"/><path class="bmap2-b_y"/></g>`,
		"fallback": "withicons-retro:close",
	});
}

export default Component;
