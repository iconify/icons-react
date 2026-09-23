import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/axq4_tbdk.css';
import '../../css/f/fxyg_bgsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="axq4_tbdk"/><path class="fxyg_bgsa"/></g>`,
		"fallback": "keyline-icons:cloud-sparkles-fill",
	});
}

export default Component;
