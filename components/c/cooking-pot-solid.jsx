import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/ho4-l3edr.css';
import '../../css/x/xf96lpbdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ho4-l3edr"/><path class="wm-a xf96lpbdi"/></g>`,
		"fallback": "withicons:cooking-pot-solid",
	});
}

export default Component;
