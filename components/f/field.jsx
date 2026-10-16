import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l4httfblf.css';
import '../../css/g/g3dro3bya.css';
import '../../css/v/vukzssbyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 21.8 18.2)" class="l4httfblf"/><path class="g3dro3bya"/><rect transform="matrix(0 -1 -1 0 21.8 18.2)" class="vukzssbyy"/></g>`,
		"fallback": "andrsrxn:field",
	});
}

export default Component;
