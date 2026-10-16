import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l4httfblf.css';
import '../../css/f/f_7ajb-qv.css';
import '../../css/h/hi53inj4f.css';
import '../../css/v/vukzssbyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.3 18.21)" class="l4httfblf"/><path class="f_7ajb-qv"/><path class="hi53inj4f"/><rect transform="matrix(0 -1 -1 0 22.3 18.21)" class="vukzssbyy"/></g>`,
		"fallback": "andrsrxn:field-cursor-text",
	});
}

export default Component;
