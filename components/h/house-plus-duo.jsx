import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gunbq9btm.css';
import '../../css/i/idh12yb8z.css';
import '../../css/a/azlmfgbpz.css';
import '../../css/v/vu-t8mz1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gunbq9btm"/><path class="idh12yb8z wm-s"/><path class="azlmfgbpz"/><path class="vu-t8mz1s"/></g>`,
		"fallback": "withicons:house-plus-duo",
	});
}

export default Component;
