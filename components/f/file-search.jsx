import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/f/fxkf5gb0u.css';
import '../../css/t/tp82w7b8j.css';
import '../../css/x/x89uptzer.css';
import '../../css/n/nyzlhyn8x.css';
import '../../css/y/y0qf6yjzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="fxkf5gb0u"/><path class="tp82w7b8j"/><path class="x89uptzer"/><path class="nyzlhyn8x"/><path class="y0qf6yjzh"/></g>`,
		"fallback": "withicons-retro:file-search",
	});
}

export default Component;
