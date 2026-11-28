import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpsncfb9w.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/ssn2did6s.css';
import '../../css/p/p70x4lbvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary tpsncfb9w"/><g class="dt0cm9dhy primary"><path class="ssn2did6s"/><path class="p70x4lbvi"/></g>`,
		"fallback": "iconaut:eyedropper-duo",
	});
}

export default Component;
