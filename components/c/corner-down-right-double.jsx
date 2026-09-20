import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mxrs_e7hy.css';
import '../../css/d/d72986bro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mxrs_e7hy"/><path class="d72986bro"/></g>`,
		"fallback": "tabler:corner-down-right-double",
	});
}

export default Component;
