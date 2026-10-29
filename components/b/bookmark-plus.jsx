import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/st399vzks.css';
import '../../css/a/a6_k4cbix.css';
import '../../css/q/qg5_gmbiq.css';
import '../../css/t/tmf6vlb7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="st399vzks wm-k"/><path class="a6_k4cbix wm-k"/><path class="qg5_gmbiq wm-k"/><path class="tmf6vlb7i wm-s"/></g>`,
		"fallback": "withicons-anime:bookmark-plus",
	});
}

export default Component;
