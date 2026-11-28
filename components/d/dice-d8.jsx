import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cox93acsa.css';
import '../../css/c/c0azqtrwe.css';
import '../../css/u/ukk3libhl.css';
import '../../css/w/w_fec3b2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="cox93acsa"/><path class="c0azqtrwe"/><path class="ukk3libhl"/><path class="w_fec3b2d"/></g>`,
		"fallback": "iconaut:dice-d8",
	});
}

export default Component;
