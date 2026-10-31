import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4a0tubzg.css';
import '../../css/q/q7l5kgbhg.css';
import '../../css/c/c2_2vuu0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g4a0tubzg wm-k"/><path class="q7l5kgbhg wm-shine"/><path class="c2_2vuu0f wm-shine"/></g>`,
		"fallback": "withicons-lunar:avatar-frog",
	});
}

export default Component;
