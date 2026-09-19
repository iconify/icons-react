import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gmaum8vqc.css';
import '../../css/g/ghb9m550i.css';
import '../../css/o/ot_m0hbva.css';
import '../../css/r/rmwwbubll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gmaum8vqc"/><path class="ghb9m550i"/><path class="ot_m0hbva"/><path class="rmwwbubll"/></g>`,
		"fallback": "hugeicons:backpack-01",
	});
}

export default Component;
