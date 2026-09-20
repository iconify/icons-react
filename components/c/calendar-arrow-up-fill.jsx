import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/ms2uhcbmc.css';
import '../../css/d/d3207rboz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="ms2uhcbmc"/><path class="d3207rboz"/></g>`,
		"fallback": "keyline-icons:calendar-arrow-up-fill",
	});
}

export default Component;
