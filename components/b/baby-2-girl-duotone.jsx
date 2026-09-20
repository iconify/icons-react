import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fvyxm7bvs.css';
import '../../css/s/sp1mbgw9c.css';
import '../../css/w/w9u_dxeve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fvyxm7bvs"/><path class="sp1mbgw9c"/><path class="w9u_dxeve"/></g>`,
		"fallback": "keyline-icons:baby-2-girl-duotone",
	});
}

export default Component;
