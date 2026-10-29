import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x4e1woonj.css';
import '../../css/i/ip7h18bdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="x4e1woonj"/><path class="ip7h18bdm wm-a"/></g>`,
		"fallback": "withicons:bauble",
	});
}

export default Component;
