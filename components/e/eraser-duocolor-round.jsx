import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zlh_l7b6b.css';
import '../../css/j/jmwua5bim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zlh_l7b6b"/><path class="jmwua5bim"/></g>`,
		"fallback": "coolicons:eraser-duocolor-round",
	});
}

export default Component;
