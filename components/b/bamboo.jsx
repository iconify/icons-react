import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uwa_zuyob.css';
import '../../css/d/dj5-46f_j.css';
import '../../css/o/ocgnxngjt.css';
import '../../css/t/t8zafvvtd.css';
import '../../css/t/t64ibab7w.css';
import '../../css/s/soye1knay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="uwa_zuyob wm-shadow"/><path class="dj5-46f_j"/><path class="ocgnxngjt"/><path class="t8zafvvtd"/><path class="t64ibab7w"/><path class="soye1knay"/></g>`,
		"fallback": "withicons-retro:bamboo",
	});
}

export default Component;
