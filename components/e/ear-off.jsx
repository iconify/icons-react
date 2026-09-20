import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hdceo_cfo.css';
import '../../css/u/uo2dpgbnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hdceo_cfo"/><path class="uo2dpgbnc"/></g>`,
		"fallback": "lucide:ear-off",
	});
}

export default Component;
