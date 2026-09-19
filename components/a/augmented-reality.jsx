import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/h_cgl-bdl.css';
import '../../css/d/d-5qcb7mz.css';
import '../../css/w/w4xii1z6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="h_cgl-bdl"/><path class="d-5qcb7mz"/><path class="w4xii1z6i"/></g>`,
		"fallback": "akar-icons:augmented-reality",
	});
}

export default Component;
