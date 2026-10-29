import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vanl12bnz.css';
import '../../css/h/h7btge1_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vanl12bnz"/><path class="h7btge1_e wm-a"/></g>`,
		"fallback": "withicons:external-link",
	});
}

export default Component;
