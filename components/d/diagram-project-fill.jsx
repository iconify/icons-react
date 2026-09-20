import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m65fioiio.css';
import '../../css/v/vo_5k3bvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m65fioiio"/><path class="vo_5k3bvu"/></g>`,
		"fallback": "keyline-icons:diagram-project-fill",
	});
}

export default Component;
