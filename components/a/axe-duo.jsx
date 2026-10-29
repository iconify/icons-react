import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kpg7scfkl.css';
import '../../css/h/hv1_qk9jj.css';
import '../../css/m/mjecvc15l.css';
import '../../css/g/gfqmenbgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kpg7scfkl"/><path class="hv1_qk9jj wm-a"/><path class="mjecvc15l"/><path class="gfqmenbgk wm-a"/></g>`,
		"fallback": "withicons:axe-duo",
	});
}

export default Component;
