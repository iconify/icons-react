import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s0s9ztoap.css';
import '../../css/h/h7btge1_e.css';
import '../../css/v/vanl12bnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="s0s9ztoap"/><path class="h7btge1_e wm-a"/><path class="vanl12bnz"/></g>`,
		"fallback": "withicons:external-link-duo",
	});
}

export default Component;
