import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z7ef3oylu.css';
import '../../css/p/p_0wpug2z.css';
import '../../css/l/l9fprqb_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z7ef3oylu"/><path class="p_0wpug2z"/><path class="l9fprqb_p"/></g>`,
		"fallback": "iconaut:download",
	});
}

export default Component;
