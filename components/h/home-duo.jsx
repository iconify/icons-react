import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gunbq9btm.css';
import '../../css/b/bx2-xs7ey.css';
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
		"content": `<g class="dt0cm9dhy"><path class="gunbq9btm"/><path class="bx2-xs7ey wm-a"/><path class="azlmfgbpz"/><path class="vu-t8mz1s"/></g>`,
		"fallback": "withicons:home-duo",
	});
}

export default Component;
