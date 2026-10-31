import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/f/fxkf5gb0u.css';
import '../../css/i/i_2rjobrx.css';
import '../../css/y/y2pqy-b-d.css';
import '../../css/m/mt13o1qgl.css';
import '../../css/g/gsx1x9bqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="fxkf5gb0u"/><path class="i_2rjobrx"/><path class="y2pqy-b-d"/><path class="mt13o1qgl"/><path class="gsx1x9bqq"/></g>`,
		"fallback": "withicons-retro:file-check",
	});
}

export default Component;
