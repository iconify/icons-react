import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/ms2uhcbmc.css';
import '../../css/i/i7dyo958m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="ms2uhcbmc"/><path class="i7dyo958m"/></g>`,
		"fallback": "keyline-icons:calendar-check-fill",
	});
}

export default Component;
