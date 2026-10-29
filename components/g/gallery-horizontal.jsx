import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/omtqkcbfk.css';
import '../../css/o/od38u2bjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="omtqkcbfk"/><path class="od38u2bjg wm-a"/></g>`,
		"fallback": "withicons:gallery-horizontal",
	});
}

export default Component;
