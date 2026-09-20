import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/a4t2l3b2j.css';
import '../../css/w/wetcoibrm.css';
import '../../css/h/h3t_fhb_o.css';
import '../../css/e/e7h-jwcvd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="a4t2l3b2j"/><path class="wetcoibrm"/><path class="h3t_fhb_o"/><path class="e7h-jwcvd"/></g>`,
		"fallback": "streamline-plump-color:horizontal-slider-square",
	});
}

export default Component;
