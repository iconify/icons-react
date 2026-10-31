import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/faoi30bgj.css';
import '../../css/f/f8801gb6p.css';
import '../../css/t/t-xx0ac2o.css';
import '../../css/n/nq1u7dbec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="faoi30bgj wm-shadow"/><path class="f8801gb6p"/><path class="t-xx0ac2o"/><path class="nq1u7dbec"/></g>`,
		"fallback": "withicons-retro:git-fork",
	});
}

export default Component;
