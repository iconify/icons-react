import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h-3-rtvqu.css';
import '../../css/y/yv63gfbwf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h-3-rtvqu"/><path class="yv63gfbwf"/></g>`,
		"fallback": "glyphs-poly:cursor",
	});
}

export default Component;
