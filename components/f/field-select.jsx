import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l4httfblf.css';
import '../../css/m/mnrlhbcnt.css';
import '../../css/v/vukzssbyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 21.73 18.5)" class="l4httfblf"/><path class="mnrlhbcnt"/><rect transform="matrix(0 -1 -1 0 21.73 18.5)" class="vukzssbyy"/></g>`,
		"fallback": "andrsrxn:field-select",
	});
}

export default Component;
