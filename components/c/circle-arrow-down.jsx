import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/l/l2iv1ebep.css';
import '../../css/i/iziviib_t.css';
import '../../css/n/nup8enbjy.css';
import '../../css/x/x9x2k2-hi.css';
import '../../css/d/dlvl4ql_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="l2iv1ebep"/><path class="iziviib_t"/><path class="nup8enbjy"/><path class="x9x2k2-hi"/><path class="dlvl4ql_s"/></g>`,
		"fallback": "withicons-retro:circle-arrow-down",
	});
}

export default Component;
