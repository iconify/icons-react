import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m91s8ptxl.css';
import '../../css/p/plff90baa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m91s8ptxl"/><path class="plff90baa"/></g>`,
		"fallback": "tabler:contrast-2-off",
	});
}

export default Component;
