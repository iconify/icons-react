import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrbrxbbho.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ub4u4kwda.css';
import '../../css/u/u7s_38bqj.css';
import '../../css/o/ozqj7zbsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrbrxbbho secondary"/><g class="dt0cm9dhy primary"><path class="ub4u4kwda"/><path class="u7s_38bqj"/><path class="ozqj7zbsf"/></g>`,
		"fallback": "iconaut:curtains-open-duo",
	});
}

export default Component;
