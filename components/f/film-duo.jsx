import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/td00sn06k.css';
import '../../css/f/fqe0e-3jo.css';
import '../../css/e/euj49csjz.css';
import '../../css/s/stgsv1byj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="td00sn06k"/><path class="fqe0e-3jo wm-a"/><path class="euj49csjz"/><path class="stgsv1byj wm-a"/></g>`,
		"fallback": "withicons:film-duo",
	});
}

export default Component;
