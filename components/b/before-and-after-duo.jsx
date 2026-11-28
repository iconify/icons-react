import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x670tjb1e.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rmv9bobon.css';
import '../../css/d/dab5zv50c.css';
import '../../css/u/up2_48b4c.css';
import '../../css/f/fy27n3vtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary x670tjb1e"/><g class="dt0cm9dhy primary"><path class="rmv9bobon"/><path class="dab5zv50c"/><path class="up2_48b4c"/><path class="fy27n3vtu"/></g>`,
		"fallback": "iconaut:before-and-after-duo",
	});
}

export default Component;
