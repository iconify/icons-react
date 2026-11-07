import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gw83f_1-z.css';
import '../../css/i/irwtlacme.css';
import '../../css/t/t1f8c32xf.css';
import '../../css/s/sd19jvbvo.css';
import '../../css/u/ujsyiacnz.css';
import '../../css/j/jcwlndbbt.css';
import '../../css/w/w5d1vg_ml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gw83f_1-z"/><path class="irwtlacme"/><path class="t1f8c32xf"/><path class="sd19jvbvo"/><path class="ujsyiacnz"/><path class="jcwlndbbt"/><path class="w5d1vg_ml"/></g>`,
		"fallback": "solar:cloud-sun-2-linear",
	});
}

export default Component;
