import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7fxz1b6h.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mv3x0f2uq.css';
import '../../css/s/s7t5xsblx.css';
import '../../css/t/t_bb9sb1d.css';
import '../../css/j/jrct5_xpi.css';
import '../../css/q/q28h-vbqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary v7fxz1b6h"/><g class="dt0cm9dhy primary"><path class="mv3x0f2uq"/><path class="s7t5xsblx"/><path class="t_bb9sb1d"/><path class="jrct5_xpi"/><path class="q28h-vbqo"/></g>`,
		"fallback": "iconaut:git-branch-check-duo",
	});
}

export default Component;
