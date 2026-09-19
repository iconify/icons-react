import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oczfjybpo.css';
import '../../css/o/o1dyojw3s.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="oczfjybpo"/><path class="o1dyojw3s"/></g>`,
		"fallback": "si-glyph:button-arrow-left",
	});
}

export default Component;
