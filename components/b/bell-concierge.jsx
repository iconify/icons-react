import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bw02u64wf.css';
import '../../css/r/rvra-ke0p.css';
import '../../css/m/m1f_eacnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="bw02u64wf"/><path class="rvra-ke0p"/><path class="m1f_eacnh"/></g>`,
		"fallback": "withicons-bauhaus:bell-concierge",
	});
}

export default Component;
