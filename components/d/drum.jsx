import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x7gcx8l3c.css';
import '../../css/j/jm_j6lb0o.css';
import '../../css/g/ggloksbqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x7gcx8l3c"/><ellipse transform="rotate(-180 12 9.77)" class="jm_j6lb0o"/><path class="ggloksbqr"/></g>`,
		"fallback": "andrsrxn:drum",
	});
}

export default Component;
