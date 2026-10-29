import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k_lneb11t.css';
import '../../css/o/oy6a688zn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="k_lneb11t"/><path class="oy6a688zn wm-a"/></g>`,
		"fallback": "withicons:archive",
	});
}

export default Component;
