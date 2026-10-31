import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/f/fxkf5gb0u.css';
import '../../css/p/pvxuwjbhi.css';
import '../../css/i/ifeqq56ub.css';
import '../../css/v/vdjluacns.css';
import '../../css/j/jhnw8terd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="fxkf5gb0u"/><path class="pvxuwjbhi"/><path class="ifeqq56ub"/><path class="vdjluacns"/><path class="jhnw8terd"/></g>`,
		"fallback": "withicons-retro:file-json",
	});
}

export default Component;
