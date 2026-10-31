import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hek983yzr.css';
import '../../css/y/ymy21s4to.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hek983yzr"/><path class="ymy21s4to"/></g>`,
		"fallback": "coolicons:eyedropper-duocolor-round",
	});
}

export default Component;
