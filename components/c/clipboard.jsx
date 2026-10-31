import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hxiasq3pp.css';
import '../../css/v/v91ay4sjm.css';
import '../../css/n/n_fk0zbiy.css';
import '../../css/v/vhnp5abdm.css';
import '../../css/u/ux8u0cbdn.css';
import '../../css/k/kc5qe6bmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hxiasq3pp wm-shadow"/><path class="v91ay4sjm"/><path class="n_fk0zbiy"/><path class="vhnp5abdm"/><path class="ux8u0cbdn"/><path class="kc5qe6bmb"/></g>`,
		"fallback": "withicons-retro:clipboard",
	});
}

export default Component;
