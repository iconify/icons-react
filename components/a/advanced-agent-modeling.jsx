import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t_ev7s-sv.css';
import '../../css/l/l5y23ru5w.css';
import '../../css/e/egad_2bsg.css';
import '../../css/i/ijh_x_qla.css';
import '../../css/u/ujr09m-6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="t_ev7s-sv"/><g class="l5y23ru5w"><path class="egad_2bsg"/><path class="ijh_x_qla"/><path class="ujr09m-6e"/></g></g>`,
		"fallback": "gcp:advanced-agent-modeling",
	});
}

export default Component;
