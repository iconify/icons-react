import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n3_36ub_x.css';
import '../../css/j/j88tl2bfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n3_36ub_x"/><path class="j88tl2bfo"/></g>`,
		"fallback": "keyline-icons:bell-sparkles",
	});
}

export default Component;
