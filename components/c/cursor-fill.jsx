import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kcs803bjd.css';
import '../../css/w/ws640lbea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kcs803bjd"/><path class="ws640lbea"/></g>`,
		"fallback": "keyline-icons:cursor-fill",
	});
}

export default Component;
