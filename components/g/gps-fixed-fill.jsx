import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cftmv-7vf.css';
import '../../css/k/ke1rj--ya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cftmv-7vf"/><path class="ke1rj--ya"/></g>`,
		"fallback": "lets-icons:gps-fixed-fill",
	});
}

export default Component;
