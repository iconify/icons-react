import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/x/xxysssc4x.css';
import '../../css/x/x1mme-tue.css';
import '../../css/m/mj1my2lvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="xxysssc4x"/><path class="x1mme-tue"/><path class="mj1my2lvo"/></g>`,
		"fallback": "humbleicons:flask",
	});
}

export default Component;
