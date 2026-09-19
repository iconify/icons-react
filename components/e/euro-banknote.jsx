import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r-l06vxbi.css';
import '../../css/h/h6sb1l_hr.css';
import '../../css/k/kd5oxwbto.css';
import '../../css/l/ltsbsuq_l.css';
import '../../css/y/y8mytibrw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r-l06vxbi"/><path class="h6sb1l_hr"/><path class="kd5oxwbto"/><path class="ltsbsuq_l"/><path class="y8mytibrw"/></g>`,
		"fallback": "fluent-emoji-flat:euro-banknote",
	});
}

export default Component;
