import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/ty35h9b_q.css';
import '../../css/v/vbgcwqb6e.css';
import '../../css/g/gg8959b3b.css';
import '../../css/v/vc-_sxbhn.css';
import '../../css/h/h0jjm6eep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ty35h9b_q"/><path class="vbgcwqb6e"/><path class="gg8959b3b"/><path class="vc-_sxbhn"/><path class="h0jjm6eep"/></g>`,
		"fallback": "solar:cloud-storm-line-duotone",
	});
}

export default Component;
