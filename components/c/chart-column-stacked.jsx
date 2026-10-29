import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sukohubkj.css';
import '../../css/c/c012e5boc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="sukohubkj wm-a"/><path class="c012e5boc"/></g>`,
		"fallback": "withicons:chart-column-stacked",
	});
}

export default Component;
