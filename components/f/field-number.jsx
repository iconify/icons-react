import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l4httfblf.css';
import '../../css/o/o-xi3kblk.css';
import '../../css/k/kupzhlb5d.css';
import '../../css/v/vukzssbyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.3 18.21)" class="l4httfblf"/><path class="o-xi3kblk"/><path class="kupzhlb5d"/><rect transform="matrix(0 -1 -1 0 22.3 18.21)" class="vukzssbyy"/></g>`,
		"fallback": "andrsrxn:field-number",
	});
}

export default Component;
