import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y91vy_b2j.css';
import '../../css/g/glnof6bxe.css';
import '../../css/j/juq3_jbfg.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y91vy_b2j"/><path class="glnof6bxe"/><path class="juq3_jbfg"/></g>`,
		"fallback": "cif:bf",
	});
}

export default Component;
