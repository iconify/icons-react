import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k3ykdccym.css';
import '../../css/m/mgrhl1bss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k3ykdccym"/><path class="mgrhl1bss"/></g>`,
		"fallback": "keyline-icons:cursor-click-fill",
	});
}

export default Component;
