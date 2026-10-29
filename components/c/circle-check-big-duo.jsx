import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oan3fnbps.css';
import '../../css/c/cym073bex.css';
import '../../css/l/ly5598bwp.css';
import '../../css/u/ucexqlbld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="oan3fnbps"/><path class="cym073bex"/><path class="ly5598bwp wm-a"/><path class="ucexqlbld"/></g>`,
		"fallback": "withicons:circle-check-big-duo",
	});
}

export default Component;
