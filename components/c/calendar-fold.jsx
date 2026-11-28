import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/ga_2bab2s.css';
import '../../css/w/w7_mhrwuu.css';
import '../../css/f/f4c2eobkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ga_2bab2s"/><path class="w7_mhrwuu"/><path class="f4c2eobkp"/></g>`,
		"fallback": "iconaut:calendar-fold",
	});
}

export default Component;
