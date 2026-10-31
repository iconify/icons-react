import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/f/fxkf5gb0u.css';
import '../../css/b/b8l3r5bbd.css';
import '../../css/y/yqo922b3k.css';
import '../../css/u/uy-4znbbx.css';
import '../../css/t/tyrgbm31w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="fxkf5gb0u"/><path class="b8l3r5bbd"/><path class="yqo922b3k"/><path class="uy-4znbbx"/><path class="tyrgbm31w"/></g>`,
		"fallback": "withicons-retro:file-down",
	});
}

export default Component;
